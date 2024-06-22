import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style1 from "./UpdateEmployee.module.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEmployee = () => {
  let [empdata, setEmpData] = useState({fn:"", ln:"", age:"", number:"",  email:""})
  let updateEmpData = ({target:{name, value}})=>{
    setEmpData({...empdata, [name]:value})
  }
  let navigate = useNavigate()
  let getEmpData = async()=>{
    let {data} = await axios.get(`http://localhost:4500/api/Student/getOneStudent/${localStorage.getItem("eid")}`)
setEmpData(data.data)
console.log(data.data)
  }

  useEffect(()=>{
getEmpData()
  }, [])


  let updateEmployeData = async(e)=>{
    e.preventDefault();
    try {
      let {data} = await axios.put(`http://localhost:4500/api/Student/updateStudent/${localStorage.getItem("eid")}`, empdata);
      console.log(data);
      toast.success('Update successful😉');
      navigate(`/emplist`);
    } catch (error) {
      console.error('Update failed', error);
      toast.error('Update failed🫠. Please try again.');
      // alert("update failed")
    }
  };

  return (
    <div className={Style1.formContainer}>
     <form action="" onSubmit={updateEmployeData}>
      <div>
        <h1 className={Style1.heading2}>Update Form</h1>
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
        <button  className={Style1.addEmpBtn} type='submit'>Update</button>
      </div>
      
     </form>
    </div>
  )
}

export default UpdateEmployee