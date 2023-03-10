import React from 'react';
import {  Link } from "react-router-dom";
const navBar= () =>{
  return (
    <div className='sidebar'>
        <div className="cuLogo" style={{textAlign:'center'}}>
            <img src={require('../../cuLogo.png')}></img>
            <h2> cuWhiteBoard </h2>
        </div>
        <ul>
            <Link to="/adminPage" style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    <span className="item">Home</span>
                </li>
            </Link>
            {/* <Link to="/adminAssignSessions" style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    <span className="item">Assign Sessions</span>
                </li>
            </Link> */}
            <Link to="/adminScholarList" style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    <span className="item">Scholars</span>
                    {/* <ul>
                        <li>
                            <span className="item">Perfomance</span>
                        </li>
                    </ul> */}
                </li>
            </Link>
            <Link to="/adminStudentList" style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    <span className="item">Students</span>
                </li>
            </Link>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    <span className="item">Logout</span>
                </li>
            </Link>
        </ul>
    </div>
  );
}
export default navBar;