import api from '../api';
import { toast } from 'react-toastify';

export const addCategory = async (category) => {

    try {
        const response = await api.post(`/categories/admin/createcategory`, category, {headers:{
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }});

        toast.success('Category added successfully!');
        console.log('Category added:', response);
        return response.data;
    } catch (error) {
        console.error('Error adding category:', error);
        toast.error(error.message || 'Failed to add category');
        throw error;
    }
}

export const getAllCategoriesOfCompany = async(companyId)=>{
    console.log("company id:" , companyId);
    try{
        const response = await api.get(`/categories/getallcategoriesbycompanyid/${companyId}`,{headers:{
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }});

        return response.data.data;
    }
    catch{
        toast.error("Errro fecthing categories..")
        console.log(error)
    }
}

export const getAllCategories = async () => {
    try {
        const response = await api.get(`/categories/getallcategories`,{headers:{
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }});

        console.log('Categories fetched:', response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        toast.error(error.message || 'Failed to fetch categories');
        throw error;
    }
}

export const getCategoryById = async (categoryId) => {
    try {
        const response = await api.get(`/categories/getcategory/${categoryId}`,{headers:{
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }});
        console.log('Category fetched:', response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
}


export const deleteCategory = async (categoryId) => {
    try {
        const response = await api.delete(`/categories/admin/deletecategory/${categoryId}`,{headers:{
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }});
        toast.success('Category deleted successfully!');
        console.log('Category deleted:', response);
        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
}