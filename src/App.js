import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import AddNewEmployee from "./components/AddNewEmployee";
import EmployeeList from "./components/EmployeeList";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addnewemployee" element={<AddNewEmployee />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/:id/editEmployee" element={<EditEmployee />} />
          {/*  path="/:id/editEmployee" to take [:id is variable] with link [editEmployee is path]*/}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
