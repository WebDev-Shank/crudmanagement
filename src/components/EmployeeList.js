import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //for edit purpose
import axios from "axios";

const EmployeeList = () => {
  const [data, setData] = useState([]);

  //! get employee data
  const getData = () => {
    let url = "http://localhost:3002/employee";
    fetch(url)
      .then((res) => res.json())
      .then((empList) => {
        console.log(empList);
        setData(empList.reverse());
      });
  };

  //! delete employee data
  const [message, setMessage] = useState("");
  const deleteData = (id, name) => {
    alert(id);
    axios
      .delete("http://localhost:3003/employee/" + id)
      .then((res) => {
        setMessage(name + " data deleted successfully !");
        setTimeout(() => {
          setMessage("");
        }, 2000);
        getData(); //to reload the data after delete item
      })
      .catch((error) => setMessage("Error in code"));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-5 p-3">
      <h3 className="mt-5 text-info text-center">Employee List</h3>
      <div className="row">
        <div className="col-lg-12 mt-2 position-fixed">
          <h5 className="text-center text-danger mt-2">{message}</h5>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h4 className="justify-content-start text-primary">
            Total Employees : <span className="text-danger">{data.length}</span>
          </h4>
          <table className="mt-4 table table-hover text-center table-striped">
            <thead className="table-dark">
              <tr>
                <th>Si No.</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((emp, index) => {
                return (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{emp.name}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.dept}</td>
                    <td>{emp.salary}</td>
                    <td>
                      <button
                        className="btn bg-danger text-white py-1 my-1 me-1"
                        // always use id to update the data instead of index value
                        onClick={deleteData.bind(this, emp.id, emp.name)}
                      >
                        Delete
                      </button>
                      <Link
                        className="btn bg-warning text-white px-4 py-1"
                        to={`/${emp.id}/editEmployee`} //it will give link with id [/1/editEmployee]
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default EmployeeList;
