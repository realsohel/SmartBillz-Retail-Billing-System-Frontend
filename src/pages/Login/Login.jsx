import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./Login.css";
import { toast } from 'react-toastify';
import { login } from '../../services/AuthService';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectAuthError, selectAuthLoader } from '../../features/auth/authSlice';

const Login = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectAuthLoader);
    const error = useSelector(selectAuthError);
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });


    const onChangeHandler = (e)=>{
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(loginAsync(data));

        if (loginAsync.fulfilled.match(resultAction)) {
            toast.success("Login successful!");
            navigate("/")

        } else {
            toast.error( error || "Login failed. Please try again later.");
        }
    };

    return (
        <div 
            className='text-gray-900 bg-gray-100 flex items-center justify-center min-h-screen login-bg'
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${assets.loginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="bg-white w-full max-w-[480px] border-0 shadow-2xl rounded-lg">
                <div className="card-body p-[2rem]">
                    <div className="text-center">
                        <h1 className=" text-2xl font-bold card-title">
                            Login
                        </h1>
                    </div>

                    <div className="mt-4">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label m-1 '>Email</label>
                                <input type="email" 
                                    name='email' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="email" placeholder='youremail@mail.com'  
                                    value={data.email}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className='form-label m-1'> Password</label>
                                <input type="password" 
                                    name='password' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="password" placeholder='********' 
                                    value={data.password}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            <button type="submit" className='button btn btn-primary w-full mt-2 bg-gray-900 hover:bg-gray-800 cursor-pointer  text-white font-semibold py-2 px-4 rounded'>
                                Login
                            </button>

                            <p className='mt-4 text-center text-sm '>Don't have an account ? <Link className='font-medium text-blue-800 underline' to="/registercompany">Register your company </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
