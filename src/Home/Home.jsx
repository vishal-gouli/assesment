import React from 'react'
import Style6 from "./Home.module.css"



const Home = () => {
  let getusername = localStorage.getItem("username")
  return (
    <div className={Style6.heading}>
    <h1 >Welcome admin panel </h1>

    <p>dear <span style={{color:"blue"}} >{getusername} </span>click on AddEmployee if you want to add</p>
    <p>dear <span style={{color:"blue"}} >{getusername}</span> click on EmployeeList if you want to see list</p>
    
    </div>
  )
}

export default Home