//import React, { Component, useState, useEffect } from 'react';
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';
//import './App.css';
//import { emptyStatement } from '@babel/types';

//function EmployeeComponent() {
//    //const [x, setText] = useState('Employee...');
//    const [employees, setEmployees] = useState([]);

//    useEffect(() => {
//        fetch("https://localhost:65039/api/Employees")
//            .then(res => res.json())
//            .then(
//                (result) => {
//                    setEmployees(result);
//                }
//            );

//        alert(employees.length + ' 2');
//    }, []);


//    //function updateEmployee(e) {
//    //    alert(employees.length + ' 3');
//    //    //setText([Id:"Customer",name:'Yonas',Location:'Dallas',Salary:200]);
//    //}

//    return (
//        <div>
//            <table>
//                <thead>
//                    <tr>
//                        <td>ID</td>
//                        <td>Name</td>
//                        <td>Location</td>
//                        <td>Salary</td>
//                    </tr>
//                </thead >
//                <tbody>
//                    {employees.map(emp => (
//                        <tr Key={emp.Id}>
//                            <td>{emp.Id}</td>
//                            <td>{emp.Name}</td>
//                            <td>{emp.Location}</td>
//                            <td>{emp.Salary}</td>
//                        </tr>
//                    ))}
//                </tbody>
//            </table>
//            <br />
//            <br />
//            <br />
//        </div>
//        //<div className="App">

//        //        <a>
//        //        {x} + ' ...'
//        //        </a>
//        //<br/>
//        //<input id="Submit1" onClick={updateEmployee} name = 'Name' type="Button" value="submit" />
//        //</div>
//    )
//}

//export default Employee;
//ReactDOM.render(<EmployeeComponent></EmployeeComponent>, document.getElementById('root'));
