import api from '../api';
import { toast } from 'react-toastify';

export const addCategory = async (category) => {

    try {
        const response = await api.post(`/categories/createcategory`, category);
        toast.success('Category added successfully!');
        console.log('Category added:', response);
        return response.data;
    } catch (error) {
        console.error('Error adding category:', error);
        toast.error(error.message || 'Failed to add category');
        throw error;
    }
}

export const getAllCategories = async () => {
    try {
        const response = await api.get(`/categories/getallcategories`);
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
        const response = await api.get(`/categories/getcategory/${categoryId}`);
        console.log('Category fetched:', response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
}


export const deleteCategory = async (categoryId) => {
    try {
        const response = await api.delete(`/categories/deletecategory/${categoryId}`);
        toast.success('Category deleted successfully!');
        console.log('Category deleted:', response);
        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
}