import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const CategoryForm = () => {

    const {createCategory} = useContext(AppContext);
    const [loading,setLoading] = useState(false);
    const [img,setImg] = useState(false);
    const [data,setData] = useState({
        name: "",
        description: "",
        bgColor: "#000000"
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

        console.log(data);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!img) {
            toast.warn("Image is required, please upload an image");
            setLoading(false);
            return;
            
        }

        const formData = new FormData();
        formData.append('category', JSON.stringify(data));
        formData.append('file', img);

        try {
            await createCategory(formData);
            setLoading(false);
            setData({
                name: "",
                description: "",
                bgColor: "#000000"
            });
            setImg(false);
        } catch (error) {
            setLoading(false);
            console.error("Failed to create category", error);
        }
    }

    return (
        
        <div className="h-[76vh] overflow-y-auto overflow-x-hidden">
            <div className=' my-3 bg-white p-4 rounded-sm shadow-md text-black font-medium text-lg'>
                <div className="row">
                    <div className="card ">
                        <form className='w-full' onSubmit={onSubmitHandler}>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="image" className='form-label cursor-pointer'>
                                    <img src={img ? URL.createObjectURL(img): assets.upload} alt="image"  width={60}/>
                                </label>
                                <input 
                                    type="file" name='image' 
                                    className='form-control' 
                                    id="image" 
                                    onChange={(e) => {setImg(e.target.files[0]);}}
                                    hidden />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className='form-label m-1 '> Name</label>
                                <input type="text" 
                                    name='name' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="name" 
                                    value={data.name}
                                    placeholder='Category Name' required
                                    onChange={onChangeHandler}
                                />

                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className='form-label m-1 '> Description</label>
                                <textarea 
                                    rows={5}
                                    name='description' 
                                    className='form-control w-full my-1 rounded-sm border-gray-300 focus:border-gray-900 focus:shadow-xl' 
                                    id="description" 
                                    value={data.description}
                                    placeholder='Write a short description about the category...' required
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="mb-3 flex flex-col">
                                <label htmlFor="bgColor" className='form-label m-1'> Background Color</label>
                                <input type="color" 
                                    name='bgColor' 
                                    className='form-control '
                                    id="bgColor"
                                    value={data.bgColor}
                                    placeholder='#ffffff' required
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <button type="submit" 
                                className='button btn btn-primary w-full mt-2 bg-gray-900 hover:bg-gray-800 cursor-pointer  text-white font-semibold py-2 px-4 rounded'
                                disabled={loading}
                                >
                                {loading ? "Uploading... "  : "Add Category"}
                            </button>

                        </form>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default CategoryForm
