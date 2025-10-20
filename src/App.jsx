import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import ManageUsers from './pages/ManageUsers/ManageUsers'
import ManageItems from './pages/ManageItems/ManageItems'
import ManageCategories from './pages/ManageCategories/ManageCategories'
import Explore from './pages/Explore/Explore'
import { Route, Routes, useLocation } from 'react-router-dom'
import "./App.css"
import Login from './pages/Login/Login'
import RegisterCompany from './pages/RegisterCompany/RegisterCompany'

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/registercompany';

  return (
    <>
      {showNavbar && <Navbar />}
      <div className={showNavbar ? "pt-18" : ""}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/items" element={<ManageItems />} />
          <Route path="/categories" element={<ManageCategories />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registercompany" element={<RegisterCompany />} />
        </Routes>
      </div>
    </>
  );
}


export default App
