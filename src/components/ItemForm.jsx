import React from 'react'

const ItemForm = () => {
    return (
        <div className="h-[76vh] overflow-y-auto overflow-x-hidden">
            <div className=' my-3 bg-white p-4 rounded-sm shadow-md text-black font-medium text-lg '>
                <div className="row">
                    <div className="card ">
                        <form className='w-full'>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="image" className='form-label'>
                                    <img src="https://placehold.co/48x48" alt="image"  width={48}/>
                                </label>
                                <input type="file" name='image' className='form-control' id="image" hidden/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className='form-label m-1 '> Name</label>
                                <input type="text" 
                                    name='name' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="name" placeholder='Item Name' 
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className='form-label m-1 '> Category</label>
                                <select name='category' className='form-select cursor-pointer w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl ' id="category">
                                    
                                    <option className='text-white bg-gray-500 cursor-pointer' value="">Select Category</option>
                                    <option value="electronics" >Electronics</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="groceries">Groceries</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className='form-label m-1 '> Price</label>
                                <input type="number" 
                                    name='price' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="price" placeholder='&#8377; 0.00' 
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className='form-label m-1 '> Description</label>
                                <textarea 
                                    rows={5}
                                    name='description' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="description" placeholder='Write a short description about the item...' 
                                />
                            </div>

                            <button type="submit" className='button btn btn-primary w-full mt-2 bg-gray-900 hover:bg-gray-800 cursor-pointer  text-white font-semibold py-2 px-4 rounded'>
                                Add Item
                            </button>

                        </form>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default ItemForm
