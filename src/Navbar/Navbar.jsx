import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Navbar.module.css"
const Navbar = () => {

  let getusername =   localStorage.getItem("username");

  return (
    <nav>

        <div>
            <h1>
                <Link to="/home">Home</Link>
            </h1>
        </div> 

        <div>
            <h1>
                <Link to="/add">AddEmployee</Link>
            </h1>
        </div>                                                                                                                          

        <div>
            <h1>
                <Link to="/emplist">EmployeeList</Link>
            </h1>
        </div>

        <div>
            <h1>
                user - {getusername}
            </h1>
        </div>
    </nav>
  )
}
export default Navbar