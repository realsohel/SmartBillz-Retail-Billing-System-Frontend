import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Explore = () => {

    const {categories} = useContext(AppContext);

    console.log(categories);
    
    return (
        <div className='explore-container p-6 md:flex block gap-[20px] box-border space-x-2 h-[100vh]'>
            
            <div className="left-col flex-[0.7] border-2 rounded-lg px-4 py-2  h-[100%] box-border flex flex-col shadow-xl shadow-black border-gray-200 bg-gray-900">
                <div className="first-row flex-[0.3] box-border overflow-y-auto">
                    First
                </div>

                <hr className='my-2 border-0 border-t-2'/>

                <div className="second-row flex-[0.7] box-border overflow-y-auto">
                    Second  
                </div>
            </div>

            <div className="right-col flex-[0.3] my-8 md:my-0 border-2 rounded-lg p-4 h-full box-border flex flex-col shadow-xl shadow-black border-gray-200 bg-gray-900">
                <div className="customer-form h-[15%]">
                    Cust...
                </div>

                <hr className='my-2 border-0 border-t-2'/>

                <div className="cart-items h-[55%] p-3  rounded-md overflow-y-auto">
                    items...
                </div>
                
                <hr className='my-2 border-0 border-t-2'/>

                <div className="cart-summary flex-[0.3]   h-[30%] overflow-y-auto">
                    summar...
                </div>



            </div>
        </div>
    )
}

export default Explore
