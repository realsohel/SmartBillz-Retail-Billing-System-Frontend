import React from 'react'
import UserForm from '../../components/UserForm'
import UserList from '../../components/UserList'

const ManageUsers = () => {
    return (
        <div className=' category-container p-6  md:flex block gap-[20px]  box-border space-x-2'>
            
            <div className="left-col flex-[0.7] border-2 rounded-lg px-4 py-2  h-[100%] box-border flex flex-col shadow-xl shadow-black border-gray-200 bg-gray-900">
                {/* <h1 className='text-2xl font-bold '>Category Form</h1> */}
                <UserForm/>
            </div>

            <div className="right-col flex-[0.3] my-8 md:my-0 border-2 rounded-lg p-4 h-full box-border flex flex-col border-gray-200 bg-gray-900">
                <h1 className='text-2xl font-bold '>User List</h1>  
                <UserList/>
            </div>

        </div>
    )
}

export default ManageUsers
