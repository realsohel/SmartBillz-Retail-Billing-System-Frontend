import React from 'react'
import CategoryForm from '../../components/CategoryForm'
import CategoryList from '../../components/CategoryList'

const ManageCategories = () => {
    return (
        <div className=' category-container p-6  md:flex block gap-[20px]  box-border space-x-2'>
            
            <div className="left-col flex-[0.7] border-2 rounded-lg px-4 py-2  h-[100%] box-border flex flex-col shadow-xl shadow-black border-gray-200 bg-gray-900">
                {/* <h1 className='text-2xl font-bold '>Category Form</h1> */}
                <CategoryForm/>
            </div>

            <div className="right-col flex-[0.3] my-8 md:my-0 border-2 rounded-lg px-4 py-2 h-full box-border flex flex-col shadow-xl shadow-black border-gray-200 bg-gray-900">
                <CategoryList/>
            </div>

        </div>
    )
}

export default ManageCategories
