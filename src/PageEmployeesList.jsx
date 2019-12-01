import React from 'react'
import Employees from './Employees'


import {
  Link
} from "react-router-dom";

const PageEmployeeList = () => (
  <div>
  <Employees/>
  <Link to="/new"><button>Add new employee</button></Link>
  </div>
)

export default PageEmployeeList