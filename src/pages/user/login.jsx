import React, { useEffect, useState} from 'react'
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const [accountIsValid, setAccountIsValid] = useState(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleSignIn = async (data) => {
        await axios.post("https://api-react-mini-store.herokuapp.com/api/user/login", {
            "email": data.email,
            "password": data.password,
        })
        .then((value) => {
            toast.success(`Logged in as ${data.email}`, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false
            });
            localStorage.setItem("accountId", value.data.accountId);
            localStorage.setItem("email", value.data.email);
            localStorage.setItem("address", value.data.address);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        })
        .catch((err) => {
            toast.error(`Oops! Email and/or Password is invalid`, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false
            });
            setAccountIsValid(false)
        });
    }

    useEffect(() => {
        document.title = "Pabelona Center | Sign In"
    }, [])
  
  return (
    <div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{fontSize: "12px"}}
        />
        <div className="container vh-100">
            <div className="row">
                <div className="col"></div>
                <div className="col-md-4">
                <h2 className='fw-bold'  style={{marginTop: "120px", fontFamily: "'Manrope', sans-serif"}}>SIGN IN</h2>
                <form  onSubmit={handleSubmit(handleSignIn)}>
                    <div className="mt-4">
                            <label for="exampleFormControlInput1" className="form-label" style={{fontSize: "12px"}}>Email address</label>
                            <input 
                                {...register("email", { required: true })} 
                                type="email" 
                                className={`form-control  ${errors.email && 'is-invalid'}`} 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com" />
                                {errors.email &&<div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide an email.
                                </div> }
                    </div>
                    {!accountIsValid && <div className="text-danger mt-1" style={{fontSize: "10px"}}>
                            Oops! Email and/or Password is invalid </div>}
                    <div className="mt-2">
                        <label for="exampleFormControlInput1" className="form-label"  style={{fontSize: "12px"}}>Password</label>
                        <input 
                            {...register("password", { required: true })} 
                            type="password" 
                            className={`form-control  ${errors.password && 'is-invalid'}`} 
                            id="exampleFormControlInput1" />
                            {errors.password &&<div id="validationServer03Feedback" class="invalid-feedback">
                                Please provide a password.
                            </div> }
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                        <p 
                            onClick={() => navigate("/register")}
                            className='p-0 m-0 pointer text-muted' style={{fontSize: "12px"}}>Don't have account?</p>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-secondary w-100 mt-4">Continue</button>
                </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    </div>
  )
}
