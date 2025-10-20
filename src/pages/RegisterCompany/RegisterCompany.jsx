import React, { useState } from 'react'
import { assets } from '../../assets/assets'

import "./RegisterCompany.css"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registercompany } from '../../services/AuthService'
import { useDispatch, useSelector } from 'react-redux'
import { registerCompanyAsync, selectAuthError, selectAuthLoader } from '../../features/auth/authSlice'


const RegisterCompany = () => {

    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
    const loader = useSelector(selectAuthLoader);
    const navigate= useNavigate();

    const [company,setCompany] = useState({
        name:"",
        email:"",
        description:""
    })

    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password:"",
    })


    const companyOnChangeHandler =(e)=>{
        const {name,value} = e.target;
        setCompany({
            ...company,
            [name]:value
        })
    }

    const userOnChangeHandler =(e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const onSubmitHandler = async(e)=>{
        e.preventDefault();

        try{
            const response = await dispatch(registerCompanyAsync({
                companyData: company,
                userData: userData
            }));

            if (registerCompanyAsync.fulfilled.match(response)) {
                setCompany({ name: "", email: "", description: "" });
                setUserData({ name: "", email: "", password: "" });

                toast.success(response.payload || "Company registered successfully");
                navigate("/login");
            } else {
                toast.error(response.payload || "Registration failed");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }

    return (
        <div 
            className='text-gray-900 bg-gray-100 flex items-center justify-center min-h-screen company-bg py-8'
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(37, 4, 4, 0.5)), url(${assets.registercompany})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="bg-white w-full max-w-[800px] border-0 shadow-2xl rounded-lg">
                <div className="card-body p-[2rem]">
                    <div className="text-center">
                        <h1 className=" text-2xl font-bold card-title">
                            Register Your Company
                        </h1>
                    </div>

                    <div className="mt-4">
                        <form onSubmit={onSubmitHandler} >
                            <div className='w-full  flex flex-col md:flex-row gap-4 justify-center'>
                                <div className='w-full  border-2 rounded-xl p-4'>
                                    <h3 className='text-xl font-semibold my-2'>Your Company Information -</h3>
                                
                                    <div className="mb-3">
                                        <label htmlFor="comp-name" className='form-label m-1 '>Company Name</label>
                                        <input type="text" 
                                            name='name' 
                                            className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                            id="comp-name" placeholder='Company name'  
                                            value={company.name}
                                            onChange={companyOnChangeHandler}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="comp-email" className='form-label m-1 '>Company Email</label>
                                        <input type="email" 
                                            name='email' 
                                            className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                            id="comp-email" placeholder='yourcompany@mail.com'  
                                            value={company.email}
                                            onChange={companyOnChangeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="comp-desc" className='form-label m-1 '>Description</label>
                                        <textarea 
                                            name="description" 
                                            id="comp-desc"  placeholder='Tell us something about your company.'
                                            className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                            value={company.description} 
                                            onChange={companyOnChangeHandler}
                                            required
                                            rows={5} cols={10}
                                        />
                                    </div>
                                </div>

                                <div className='w-full  border-2 rounded-xl p-4'>
                                    <h3 className='text-xl font-semibold my-2'>Owner User Information - </h3>

                                    <div className="mb-3">
                                        <label htmlFor="user-name" className='form-label m-1'> User Name</label>
                                        <input type="text" 
                                            name='name' 
                                            className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                            id="user-name" placeholder='Your Name' 
                                            value={userData.name}
                                            onChange={userOnChangeHandler}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="user-email" className='form-label m-1'> User Email</label>
                                        <input type="email" 
                                            name='email' 
                                            className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                            id="user-email" placeholder='youremail@mail.com' 
                                            value={userData.email}
                                            onChange={userOnChangeHandler}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className='form-label m-1'> Password</label>
                                        <input type="password" 
                                            name='password' 
                                            className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                            id="password" placeholder='********' 
                                            value={userData.password}
                                            onChange={userOnChangeHandler}
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                            

                            <button type="submit" className='button btn btn-primary w-full mt-2 bg-gray-900 hover:bg-gray-800 cursor-pointer  text-white font-semibold py-2 px-4 rounded'>
                                Register
                            </button>

                            <p className='mt-4 text-center text-sm '>Already registered? <Link className='font-medium text-blue-800 underline' to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterCompany
