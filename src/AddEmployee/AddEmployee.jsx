import axios from 'axios'
import React, { useState } from 'react'
import Style1 from "./AddEmployee.module.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
let [empdata, setEmpData] = useState({fn:"", ln:"", age:"", number:"",email:""})

let updateEmpData = ({target:{name, value}})=>{
  setEmpData({...empdata, [name]:value})
}

let addEmployeeData = async(e)=>{
  e.preventDefault();
  try {
  let sendData = await axios.post("http://localhost:4500/api/Student/addStudent", empdata)
  console.log(sendData)
  setEmpData({fn:"", ln:"", age:"", number:"", email:""})
  toast.success('Added successful😉');

    
  } catch (error) {
  toast.error('Failed🫠, Please try again.');
    
  }
}
  return (
    <div className={Style1.formContainer}>
     <form action="" onSubmit={addEmployeeData}>
      <div>
        <h1 className={Style1.heading1}>SignUp Form</h1>
      </div>
    <section className={Style1.name}>
    <div>
        <input
        type="text"
        name='fn'
        value={empdata.fn}
        placeholder='First Name'
        onChange={updateEmpData}
        />
      </div>
      <div>
        <input
        type="text"
        name='ln'
        value={empdata.ln}
        placeholder='Last Name'
        onChange={updateEmpData}
        />
      </div>
    </section>
     
      <div className={Style1.age}>
        <input
        type="number"
        name='age'
        value={empdata.age}
        placeholder='Enter your age'
        onChange={updateEmpData}
        />
      </div>
      <div className={Style1.age}>
        <input
        type="text"
        name='number'
        value={empdata.number}
        placeholder='Enter your number'
        onChange={updateEmpData}
        />
      </div>
      
      <div className={Style1.age}>
        <input
        type="text"
        name='email'
        value={empdata.email}
        placeholder='Enter your email'
        onChange={updateEmpData}
        />
      </div>
    
      <div>
        <button className={Style1.addEmpBtn} type='submit'>signup</button>
      </div>
      
     
     </form>
    </div>
  )
}
export default AddEmployee