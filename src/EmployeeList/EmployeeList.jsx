import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Style3 from "./EmployeeList.module.css"
const EmployeeList = () => {
  let [emplist, setEmpList] = useState([]);
let navigate = useNavigate()
let empList = async(e)=>{
  let {data}  = await axios.get("http://localhost:4500/api/Student/getStudents")
  setEmpList(data)
  console.log(data)
}
useEffect(()=>{
  empList()
}, [])
let viewEmployee = (eid)=>{
navigate(`/emp/${eid}`)
}
let navigateToUpdateComponent= (eid)=>{
  localStorage.setItem("eid", eid)
  navigate('/update')
}
let deletData = async(eid)=>{
  await axios.delete(`http://localhost:4500/api/Student/deleteStudent/${eid}`)
  empList()
  toast.error("deleted successfully");
}
  return (
    <>
  
    <div className={Style3.cardContainer}>
     {emplist.data?.map(({fn,ln,age,_id,email})=>{
return(<>
<section key={_id} className={Style3.card}>

<div className='card-container'>
<h1 className={Style3.heading2}>{fn}</h1>
<h1 className={Style3.heading2}>{ln}</h1>
<h1 className={Style3.heading2}>{email}</h1>

<div className='emplistbtns'>
<button onClick={()=>viewEmployee(_id)} className={Style3.view}>View</button>
<button onClick={()=>navigateToUpdateComponent(_id)} className={Style3.update}>Update</button>
<button onClick={()=>deletData(_id)} className={Style3.del}>Delete</button>
</div>

</div>
</section>
</>)
})}
    </div>
    </>
  )
}
export default EmployeeList