import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams(); //useParams is for getting variable value from weburl

  const [empname, setEmpName] = useState("");
  const [empmobile, setEmpMobile] = useState("");
  const [empdept, setEmpDept] = useState("");
  const [empsalary, setEmpSalary] = useState("");
  const [message, setMessage] = useState("");

  const getData = () => {
    // let url = "http://localhost:3002/employee/" + id;
    let url1 = "https://employeedata-fb7q.onrender.com/employee/" + id;
    axios.get(url1).then((res) => {
      setEmpName(res.data.name);
      setEmpMobile(res.data.mobile);
      setEmpDept(res.data.dept);
      setEmpSalary(res.data.salary);
    });
  };

  const updateData = () => {
    const empInfo = {
      name: empname,
      mobile: empmobile,
      dept: empdept,
      salary: empsalary,
    };
    // let url = "http://localhost:3002/employee/" + id;
    let url1 = "https://employeedata-fb7q.onrender.com/employee/" + id;
    axios.put(url1, empInfo).then((res) => {
      setMessage(empname + " details updated successfully");
    });
    setTimeout(() => {
      window.location.assign("http://localhost:3000/#/employeelist"); //for redirecting url
      alert("We are redirecting to previous page");
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, [empname, empdept, empmobile, empsalary]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 mt-5 position-fixed">
          <h5 className="text-success mt-5 fixed">{message}</h5>
        </div>
        <h3 className="text-info mt-5 text-center ">
          Edit Employee <span className="text-danger">Id : {id}</span>
        </h3>
        <div className="col-lg-3"></div>
        <div className="col-lg-6 bg-primary p-3 mt-5 rounded-3 position-relative">
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
            <button className="btn bg-info save-btn" onClick={updateData}>
              Update Data
            </button>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default EditEmployee;
