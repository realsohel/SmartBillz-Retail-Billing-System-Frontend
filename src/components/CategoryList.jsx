import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCategories,
    selectCategoryLoading,
    fetchCategoriesofCompanyAsync,
    deleteCategoryAsync,
} from "../features/categories/categorySlice";
import { selectCompany } from '../features/auth/authSlice';


const CategoryList = () => {

    const dispatch = useDispatch();
    const company = useSelector(selectCompany);
    const categories = useSelector(selectCategories);
    const loading = useSelector(selectCategoryLoading);
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchCategoriesofCompanyAsync(company.companyId));
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCategoryAsync(id));
    };

    const filteredCategories = categories.filter(category =>
        category?.name?.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="h-[76vh] overflow-y-auto overflow-x-hidden">

            <div className="p-2 my-3 flex items-center w-full space-x-1 ">
            <input 
                type="text" 
                name="keyword" 
                id="keyword" 
                className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none text-gray-900 font-medium" 
                placeholder="Search by keyword" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button 
                className="bg-gray-900 cursor-pointer hover:bg-gray-600 transition-all duration-300 p-3 rounded-md flex items-center justify-center"
            >
                <FaSearch className="text-white" size={20} />
            </button>
        </div>
        {loading && (
                <div className="text-white text-lg text-center py-10">
                Loading categories...
                </div>
            )}

            {/* 📝 Category list */}
            {!loading && filteredCategories.length > 0 ? (
                <div className="category-list py-1 ">
                {filteredCategories.map((category) => (
                    <div
                    key={category.categoryId}
                    className="category-item p-2 my-6 text-white rounded-md shadow-lg shadow-black"
                    style={{ backgroundColor: category.bgColor }}
                    >
                    <div className="flex items-center justify-between">
                        <div>
                        <img
                            src={category.imgUrl}
                            alt={category.name}
                            width={80}
                            className="border-2 border-white rounded-lg"
                        />
                        </div>

                        <div className="flex flex-col ">
                        <h5 className="text-xl font-bold">{category.name}</h5>
                        <p className="text-md font-medium">
                            {category.item ? category.item : "0 Items"}
                        </p>
                        </div>

                        <div className="mx-2 bg-red-600 rounded-full p-1 flex items-center justify-center hover:bg-red-500 transition-all duration-300">
                        <button
                            className="btn p-1 cursor-pointer"
                            onClick={() => handleDelete(category.categoryId)}
                        >
                            <FaTrash color="#ffffff" size={20} />
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            ) : (
                !loading && (
                <div className="text-white text-xl font-bold text-center py-36">
                    No categories available.
                </div>
                )
            )}
        </div>
    );
};

export default CategoryList;