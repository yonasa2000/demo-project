import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employee from './Employee';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//import ReactDOM from "react-dom";
//import React, { Component, useState, useEffect } from "react";
//import useAxios from 'axios-hooks'

//function EmployeeComponent() {
//    //const [employees, setEmployees] = useState([{ Id: 1, Name: "Yoni", Location: "Asmara", Salary: 123 }, { Id: 2, Name: "Yon", Location: "Asmara", Salary: 123 }]);
//    //alert(employees.length + ' 3');
//    //const [employees, setEmployees] = useState([]);
//    //useEffect(() => {

//    //    fetch("http://localhost:65039/api/employees")
//    //        .then(res => res.json())
//    //        .then(
//    //            (result) => {
//    //                setEmployees(result);
//    //            }
//    //        );
//    //});

//        const [{ data, loading, error }, refetch] = useAxios(
//            'http://localhost:65039/api/employees'
//        )

//        if (loading) return <p>Loading...</p>
//    if (error) return <p>Error!ccc</p>
//    //alert(data.length + ' 3');
//    var employees = data;
//    //setEmployees(data);
//    return (
//        <div>
//            <h2>Employees Data...</h2>
//            <table>
//                <thead>
//                    <tr>
//                        <th>Id</th>
//                        <th>Name</th>
//                        <th>Location</th>
//                        <th>Salary</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {employees.map(emp => (
//                        <tr key={emp.Id}>
//                            <td>{emp.Id}</td>
//                            <td>{emp.Name}</td>
//                            <td>{emp.Location}</td>
//                            <td>{emp.Salary}</td>
//                        </tr>
//                    ))}
//                </tbody>
//            </table>
//        </div>
//    )
//}

//const element = <EmployeeComponent></EmployeeComponent>

//ReactDOM.render(element, document.getElementById("root"));



