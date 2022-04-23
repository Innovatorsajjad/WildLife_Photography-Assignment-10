import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError , setPasswordError]=useState("")




    // Email form handalling


    const handleEmail = (event) => {
        const loginRegex = /\S+@\S+\.\S+/;
        const validLogin = loginRegex.test(event.target.value)

        if (validLogin) {

            setEmail(event.target.value)
        } else {
            setEmailError("Set the valid Email")
        }

    }




    //password form handling....

    const handlePassword = (event) => {
        const passwordRegex = /.{6,}/ ;
        const validPassword = passwordRegex.test(event.target.value)
        
        if(validPassword){
            setPassword(event.target.value)
        }else{
            setPasswordError("Wrong Password !!!")
        }
        
    }


    console.log(email, password);





    return (
        <div className='container mt-5'>
            <form className=' Full_form w-50 mx-auto mt-5 border p-3 rounded shadow-sm p-3 mb-5 bg-body'>
                <h1 className='text-center'>Please Login !!!</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <p className='text-danger'>{emailError}</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                    <p>Haven't account? <Link className='text-center' as={Link} to="/regester">Regester</Link></p>
                </div>
                <p className='text-danger'>{passwordError}</p>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;