import React from 'react'

const UserForm = () => {
    return (

        <div className="h-[70vh] overflow-y-auto overflow-x-hidden ">
            <div className=' my-3 bg-white p-4 rounded-sm shadow-md text-black font-medium text-lg h-[94%]'>
                <div className="row">
                    <div className="card ">
                        <form className='w-full'>

                            <div className="mb-3">
                                <label htmlFor="name" className='form-label m-1 '> Name</label>
                                <input type="text" 
                                    name='name' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="name" placeholder='John Doe' 
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className='form-label m-1 '>Email</label>
                                <input type="email" 
                                    name='email' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="email" placeholder='youremail@mail.com'  
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className='form-label m-1 '> Password</label>
                                <input type="password" 
                                    name='password' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="password" placeholder='********' 
                                    required
                                />
                            </div>

                            <button type="submit" className='button btn btn-primary w-full mt-2 bg-gray-900 hover:bg-gray-800 cursor-pointer  text-white font-semibold py-2 px-4 rounded'>
                                Add User
                            </button>

                        </form>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default UserForm
