import React, { useState } from 'react';
import "./Regester.css"
import { BsFacebook , BsGithub , BsGoogle} from "react-icons/bs";
import { Link } from 'react-router-dom';


const Regester = () => {
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const [confirmPassword , setConfirmPassword]=useState("")
    const [error,setError]=useState('')
    const [passwordError , setPasswordError]=useState("")
    const [confirmPassError , setConfirmPassError]=useState("")


        //  Email validation
    
    const handleEmailChange =(event)=>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test (event.target.value);
        
        if(validEmail){
            setError("")
             setEmail(event.target.value)
        }
   
        else{  
            setError("invalid Email or Password")
        };
    };
    

        //  Password Validation


        
    const handlePassChange=(event)=>{
        const passwordRegex =/.{6,}/ ;
        const validPassword = passwordRegex.test(event.target.value)
        console.log(validPassword);
        if (validPassword){
            setPasswordError("")
            setPassword(event.target.value)
        }else{
            setPasswordError ("Your password is Invalid")
            

        };
         

    };

                 // Confirm Password 
   
    const handleConfirmPassChange=(event)=>{
        if (password === event.target.value ){
            setConfirmPassError('')
            setConfirmPassword(event.target.value)
        }else{
            setConfirmPassError("Not Match , Try again !!!")
        }
        
        
    }
   

console.log(email,password,confirmPassword);



    







    return (
        <div className="full_div">
                    <div className='container mt-5'>
            <form className=' Full_form w-50 mx-auto mt-5 border p-3 rounded shadow-sm p-3 mb-5 bg-body'>
                <h1 className='text-center'>Please Regester !!!</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <p className='text-danger'>{error}</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePassChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p className='text-danger'>{passwordError}</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input  onChange={handleConfirmPassChange} type="password" className="form-control" id="exampleInputPassword2" />
                </div>
                <p className='text-danger'>{confirmPassError}</p>
                 <p>Already have an account ? <Link className='text-center' as={Link} to="/login">Login</Link></p>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

       
       
       
        {/* Google/Facebook/Github all are here */}

        
        <div className="website_login row container w-50 mx-auto pointer pb-5">
            <div className="col-md-4 mt-3 p-1">
                <div className="github_login single_Option border shadow-lg rounded d-flex align-items-center justify-content-center ">
                  <BsGithub className='m-2 fs-4 '/>
                <h3 className='text-dark'>Github</h3>
                </div>
            </div>
            <div className="col-md-4 mt-3 p-1">
                <div className="github_login single_Option shadow-lg rounded  border d-flex align-items-center justify-content-center ">
                <BsFacebook className='text-info m-2 fs-4 '/>
                <h3 className='text-dark'>Facebook</h3>
                </div>
            </div>
            <div className="col-md-4 mt-3 p-1">
                <div className="github_login single_Option border shadow-lg rounded d-flex align-items-center justify-content-center ">
               <BsGoogle className='m-2 fs-4  text-success'/>
                <h3 className='text-dark'>Google</h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Regester;