import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style5 from "./singleEmployee.module.css"
const SingleEmployee = () => {
  let [empdata, setEmpData] = useState([])
  let {eid} = useParams()
let getEmpData = async()=>{
  let {data} = await axios.get(`http://localhost:4500/api/Student/getOneStudent/${eid}`)
console.log(data)
setEmpData(data)
}
useEffect(()=>{
  getEmpData()
},[])

  return (
    <div>
  <section  className={style5.mainsec}>
  <h2 >Employee Data</h2>

  <table >
  <tbody>
    <tr>
      <td>First Name:</td>
      <td>{`${empdata.data?.fn}`}</td>
    </tr>
    <tr>
      <td>Last Name:</td>
      <td>{`${empdata.data?.ln}`}</td>
    </tr>
    <tr>
      <td>Age:</td>
      <td>{`${empdata.data?.age}`}</td>
    </tr>
    <tr>
      <td>Email:</td>
      <td>{`${empdata.data?.email}`}</td>
    </tr>
    <tr>
      <td>Mobile Number:</td>
      <td>{`${empdata.data?.number}`}</td>
    </tr>
  </tbody>
</table>
  </section>
    </div>
  )
}
export default SingleEmployee
