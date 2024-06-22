import React from 'react'
import EmployeeRouter from './Router/EmployeeRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  return (
    <div>
        <EmployeeRouter/>
        <ToastContainer />
    </div>
  )
}

export default Main