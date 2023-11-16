import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [empList, setEmpList] = useState("");
  //! get employee data
  const getData = () => {
    // let url = "http://localhost:3002/employee";
    let url1 = "https://employeedata-fb7q.onrender.com/employee";
    fetch(url1)
      .then((res) => res.json())
      .then((empList) => {
        console.log(empList);
        setEmpList(empList);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-5 p-3">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-5">
          <h1 className="text-center text-bg-dark p-4 text-info">
            <i class="fa-solid fa-briefcase text-success"></i> Total Employees
            are <span className="text-danger"> {empList.length}</span>
          </h1>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
