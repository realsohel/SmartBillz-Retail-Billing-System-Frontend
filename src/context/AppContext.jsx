import { createContext, useEffect, useState } from "react";
import { addCategory, deleteCategory, getAllCategories } from "../services/CategoryService";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    
    const [categories, setCategories] = useState([]);

    const createCategory = async(category) => {

        const response = await addCategory(category);
        setCategories([...categories, response.data]);
        return response;
    }

    const deleteCategoryById = async (categoryId) => {  
        try {
            const res = await deleteCategory(categoryId);
            console.log(res);
            const updatedCategories = categories.filter(category => category.categoryId !== categoryId);
            setCategories(updatedCategories);
        } catch (error) {
            console.error("Failed to delete category");
        }
    }

    useEffect(() => {
        async function loadData(){
            const response = await getAllCategories();
            setCategories(response);
        }

        loadData();
        
        return () => {
            // Cleanup logic if needed
            setCategories([]);
            console.log("AppContextProvider unmounted");
        };

    }, []);


    const contextValue = {

        categories,
        setCategories,
        createCategory,
        deleteCategoryById,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
}