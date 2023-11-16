import React, { useState } from "react";
import axios from "axios";

const AddNewEmployee = () => {
  const [empname, setEmpName] = useState("");
  const [empmobile, setEmpMobile] = useState("");
  const [empdept, setEmpDept] = useState("");
  const [empsalary, setEmpSalary] = useState("");
  const [message, setMessage] = useState("");
  const [msgstate, setMsgState] = useState(true);

  const saveEmpData = () => {
    // alert(empname);
    if (
      empname === "" ||
      empdept === "" ||
      empdept === "" ||
      empmobile === ""
    ) {
      setMsgState(false);
      setMessage("Please fill all the fields !!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      let empInfo = {
        name: empname,
        mobile: empmobile,
        dept: empdept,
        salary: empsalary,
      };
      const url = "http://localhost:3002/employee";
      axios
        .post(url, empInfo)
        .then((res) => setMessage(empname + " data added successfully !"));
      setMsgState(true);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setEmpMobile("");
      setEmpDept("");
      setEmpName("");
      setEmpSalary("");
    }
  };

  return (
    <div className="mt-5 p-3">
      <div className="row">
        <div className="col-lg-12 mt-2 position-fixed">
          <h5 className="text-success mt-1 text-center">
            {msgstate === false ? (
              <h5 className="text-center text-danger mt-2">{message}</h5>
            ) : (
              <h5 className="text-center text-success mt-2">{message}</h5>
            )}
          </h5>
        </div>
        <h3 className="text-info mt-5 text-center ">Add New Employee</h3>
        <div className="col-lg-3"></div>
        <div className="col-lg-6 bg-primary p-3 mt-1 rounded-3 position-relative">
          <div className="input-group my-4">
            <span
              className="input-group-text px-3"
              id="inputGroup-sizing-default"
            >
              <i className="fa-solid fa-person fa-xl"></i>
            </span>
            <input
              type="text"
              value={empname}
              placeholder="Enter Employee Name"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(obj) => setEmpName(obj.target.value)}
            />
          </div>

          <div className="input-group my-4">
            <span
              className="input-group-text px-3"
              id="inputGroup-sizing-default"
            >
              <i class="fa-solid fa-mobile fa-xl"></i>
            </span>
            <input
              type="text"
              value={empmobile}
              placeholder="Enter Mobile Number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(obj) => setEmpMobile(obj.target.value)}
            />
          </div>

          <div className="input-group my-4">
            <span
              className="input-group-text px-3"
              id="inputGroup-sizing-default"
            >
              <i class="fa-solid fa-building fa-xl"></i>
            </span>
            <input
              type="text"
              value={empdept}
              placeholder="Enter Employee Department"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(obj) => setEmpDept(obj.target.value)}
            />
          </div>

          <div className="input-group my-4">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i class="fa-solid fa-money-bill fa-xl"></i>
            </span>
            <input
              type="text"
              value={empsalary}
              placeholder="Enter Employee Salary"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(obj) => setEmpSalary(obj.target.value)}
            />
          </div>
          <div className="input-group my-2 justify-content-center">
            <button className="btn bg-info save-btn" onClick={saveEmpData}>
              Save Data
            </button>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default AddNewEmployee;
