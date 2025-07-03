import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>

        <nav className=" dark:bg-gray-900 fixed w-full z-20 top-0 start-0  shadow-xl dark:border-gray-600 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-6 max-h-full  md:h-auto">
                <a href="#" className="flex items-start space-x-2 rtl:space-x-reverse">
                    <img src={assets.logo} className="h-20" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SmartBillz</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                
                <div className="hidden w-full md:block md:w-auto mb-6 md:mb-0 " id="navbar-sticky">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                `block py-2 px-3 rounded-sm md:p-0 ${
                                    isActive
                                    ? 'text-white bg-blue-700 md:bg-transparent rounded-lg md:rounded-none md:shadow-none shadow-lg md:text-blue-700 md:dark:text-blue-500'
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/explore"
                                className={({ isActive }) =>
                                `block py-2 px-3 rounded-sm md:p-0 ${
                                    isActive
                                    ? 'text-white bg-blue-700 md:bg-transparent rounded-lg md:rounded-none md:shadow-none shadow-lg md:text-blue-700 md:dark:text-blue-500'
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }`
                                }
                            >
                                Explore
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/items"
                                className={({ isActive }) =>
                                `block py-2 px-3 rounded-sm md:p-0 ${
                                    isActive
                                    ? 'text-white bg-blue-700 md:bg-transparent rounded-lg md:rounded-none md:shadow-none shadow-lg md:text-blue-700 md:dark:text-blue-500'
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }`
                                }
                            >
                                Manage Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/categories"
                                className={({ isActive }) =>
                                `block py-2 px-3 rounded-sm md:p-0 ${
                                    isActive
                                    ? 'text-white bg-blue-700 md:bg-transparent rounded-lg md:rounded-none md:shadow-none shadow-lg md:text-blue-700 md:dark:text-blue-500'
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }`
                                }
                            >
                                Manage Categories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }) =>
                                `block py-2 px-3 rounded-sm md:p-0 ${
                                    isActive
                                    ? 'text-white bg-blue-700 md:bg-transparent rounded-lg md:rounded-none md:shadow-none shadow-lg md:text-blue-700 md:dark:text-blue-500'
                                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }`
                                }
                            >
                                Manage Users
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    </div>
    )
}

export default Navbar
