import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {

    return (
        <div className='container mt-5'>
            <form className=' Full_form w-50 mx-auto mt-5 border p-3 rounded shadow-sm p-3 mb-5 bg-body'>
            <h1 className='text-center'>Please Login !!!</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    <p>Haven't account? <Link className='text-center' as={Link} to="/regester">Regester</Link></p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;