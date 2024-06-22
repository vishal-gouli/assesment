import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddEmployee from '../AddEmployee/AddEmployee';
import EmployeeList from '../EmployeeList/EmployeeList';
import UpdateEmployee from '../UpdateEmployee/UpdateEmployee';
import SingleEmployee from '../SingleEmployee/SingleEmployee';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import style7 from './Mainnavbar.module.css'

const Mainnavbar = () => {
    // const navigate = useNavigate();
    let[state,setState] = useState(false);
    let[state1,setState1] = useState(true);

    // let username = document.getElementById('username').value.trim()? true :"username is mandatory"   ;
    // let password = document.getElementById('password').value.trim()? true :"password is mandatory"   ;

    let username = document.getElementById('username');
    let password = document.getElementById('password');

    let validateInputfield =()=>{


        let username = document.getElementById('username');
        let password = document.getElementById('password');
        let s1 = document.getElementById('s1');
        let s2 = document.getElementById('s2');

        let regex = /[a-zA-Z]/g;
        let reguser = regex.test(username.value)
   
     let userlength =  username.value.length > 4 && username.value.length <10
       
        if(username.value == ''){
            s1.innerHTML = "Must be filled";
            // return false; 
        }
        else if(!reguser){
             s1.innerHTML ="invalid username"
        }
        else if(!userlength){
            s1.innerHTML = "username must between 4 and 10 characters"
         }else{
         localStorage.setItem("username",username.value);
         }

let regex1 = /^[A-Za-z0-9]/
   let regpassword = regex1.test(password.value);
        if(password.value == ''){
            s2.innerHTML = "Must be filled"; 
        }
        else if(!regpassword){
            s2.innerHTML = "least one numeric digit, one uppercase and one lowercase letter"
        }

        if( username.value == ""  || password.value == ""){
            if(!reguser){
                      return false;
            }
        }else if(!reguser ){
            return false;
        }else if((!userlength )){
            return false;
        }
        else{
            if(regpassword){
                return true;
            }
        }
    }

    let submittingform =(e)=>{
        e.preventDefault();

        let formval = validateInputfield();

           formval &&  setState(true);
           formval &&  setState1(false);

    }

  return (
    <>
    {
        state1 && 
    <div className={style7.container}>

    <form action="" className={style7.forming} >
             <span id='s1' style={{color:'red'}} ></span>
            <input type="text" placeholder='username' name='username' id='username' />  
            <span id='s2' style={{color:'red'}} ></span>
            <input type="password" placeholder='password' name='password' id='password'  /> 
            <button type='submit' onClick={submittingform} className={style7.btn}>Submit</button>
        </form>

    </div>

}

        

        {
            state &&
        

        <Router>
                <Navbar/>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/add' element={<AddEmployee/>}/>
                    <Route path='/emplist' element={<EmployeeList/>}/>
                    <Route path='/update' element={<UpdateEmployee/>}/>
                    <Route path='/emp/:eid' element={<SingleEmployee/>}/>
                </Routes>
            </Router>

        }
    </>
  )
}

export default Mainnavbar