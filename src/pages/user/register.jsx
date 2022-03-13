import React, { useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


export default function Register() {
    const navigate = useNavigate();
    const [accountExist, setAccountExist] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

   const handleSignUp = async (data) => {
        await axios.post("https://api-react-mini-store.herokuapp.com/api/user", {
            "email": data.email,
            "password": data.password,
            "address": data.address
        })
        .then((_) => {
            toast.success(`${data.email} is registered successfully!`, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false
            });
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        })
        .catch((err) => setAccountExist(true));
    }

    useEffect(() => {
        document.title = "Pabelona Center | Sign Up"
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
                <h2 className='fw-bold'  style={{marginTop: "120px", fontFamily: "'Manrope', sans-serif"}}>SIGN UP</h2>
                <form  onSubmit={handleSubmit(handleSignUp)}>
                    <div className="mt-4">
                            <label className="form-label" style={{fontSize: "12px"}}>Email address</label>
                            <input 
                                {...register("email", { required: true })} 
                                type="email" 
                                className={`form-control  ${errors.email && 'is-invalid'}`} 
                                placeholder="name@example.com" />
                                {errors.email && <div id="validationServer03Feedback" className="invalid-feedback">
                                    Please provide an email.
                                </div> }
                               
                    </div>
                    {accountExist && <div className="text-danger mt-1" style={{fontSize: "10px"}}>
                            Oops! Email is already registered
                    </div>}
                    <div className="mt-2">
                            <label className="form-label" style={{fontSize: "12px"}}>Address</label>
                            <input 
                                {...register("address", { required: true })} 
                                autoComplete="none"
                                type="text" 
                                className={`form-control  ${errors.address && 'is-invalid'}`} 
                                placeholder="B23 L14 Uptown, Cagayan de Oro City" />
                                {errors.email &&<div id="validationServer03Feedback" className="invalid-feedback">
                                    Please provide an address.
                                </div> }
                    </div>
                    <div className="mt-2">
                        <label  className="form-label"  style={{fontSize: "12px"}}>Password</label>
                        <input 
                            {...register("password", { required: true })} 
                            type="password" 
                            className={`form-control  ${errors.password && 'is-invalid'}`} 
                            id="exampleFormControlInput1" />
                            {errors.password &&<div id="validationServer03Feedback" className="invalid-feedback">
                                Please provide a password.
                            </div> }
                    </div>
                    <div className="d-flex justify-content-end mt-2">
                        <p 
                            onClick={() => navigate("/login")}
                            className='p-0 m-0 pointer text-muted' style={{fontSize: "12px"}}>Already have an account?</p>
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
