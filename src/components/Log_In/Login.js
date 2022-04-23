import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
import auth from "../../firebase.init"
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [signInWithGoogle, googleUser, googleLoad] = useSignInWithGoogle(auth)



    // Email form handalling


    const handleEmail = (event) => {
        const loginRegex = /\S+@\S+\.\S+/;
        const validLogin = loginRegex.test(event.target.value)

        if (validLogin) {
            setEmailError("")
            setEmail(event.target.value)
        } else {
            setEmailError("Set the valid Email")
        }

    }




    //password form handling....

    const handlePassword = (event) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value)

        if (validPassword) {
            setPasswordError("")
            setPassword(event.target.value)
        } else {
            setPasswordError("Wrong Password !!!")
        }

    }


    //  Using Hooks 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError
    ] = useSignInWithEmailAndPassword(auth)

    const handleLogin = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const navigate = useNavigate();
    const location =useLocation();
    // let from = location.state?.from?.pathname || "/"; 
    const from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from)
        }


    }, [user])
   

    


    return (
        <div className='container mt-5'>
            <form onSubmit={handleLogin} className=' Full_form w-50 mx-auto mt-5 border p-3 rounded shadow-sm p-3 mb-5 bg-body'>
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




                     {/* Google/Facebook/Github all are here */}



            <div className="website_login row container w-50 mx-auto pointer pb-5">
                <div className="col-md-4 mt-3 p-1">
                    <button className="github_login single_Option border shadow-lg rounded d-flex align-items-center justify-content-center ">
                        <BsGithub className='m-2 fs-4 ' />
                        <h3 className='text-dark'>Github</h3>
                    </button>
                </div>
                <div className="col-md-4 mt-3 p-1">
                    <button className="github_login single_Option shadow-lg rounded  border d-flex align-items-center justify-content-center ">
                        <BsFacebook className='text-info m-2 fs-4 ' />
                        <h3 className='text-dark'>Facebook</h3>
                    </button>
                </div>
                <div className="col-md-4 mt-3 p-1">
                    <button onClick={() => signInWithGoogle()} className="github_login single_Option border shadow-lg rounded d-flex align-items-center justify-content-center ">
                        <BsGoogle className='m-2 fs-4  text-success' />
                        <h3 className='text-dark'>Google</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;