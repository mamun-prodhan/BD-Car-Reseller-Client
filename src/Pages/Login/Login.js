import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    
    const handleLogin = data =>{
        console.log(data);
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email' {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <select className='my-3' {...register("role", { required: true })} >
                        <option value="user">User Account</option>
                        <option value="seller">Seller Account</option>
                    </select>
                    {/* <p>{data}</p> */}
                    <input className='btn btn-primary w-full' value="Login" type="submit" />
                </form>
                <p className='mt-3'>New to BD Car Reseller <Link className='text-primary' to="/signup">Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;