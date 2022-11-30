import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState:{errors}, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    
    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => {
            console.log(err.message);
            setLoginError(err.message);
        });
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email' 
                        {...register("email", {
                            required: "Email Address is Required"
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' 
                        {...register("password", 
                        {required: "Password is Required",
                        minLength: {value: 6, message: 'Password must be 6 characters or longer'}
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <select className='my-3' {...register("role", { required: true })} >
                        <option value="user">User Account</option>
                        <option value="seller">Seller Account</option>
                    </select>
                    {/* <p>{data}</p> */}
                    <input className='btn btn-primary w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-3'>New to BD Car Reseller <Link className='text-primary' to="/signup">Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;