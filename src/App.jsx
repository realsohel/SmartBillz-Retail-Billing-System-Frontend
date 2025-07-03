import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import ManageUsers from './pages/ManageUsers/ManageUsers'
import ManageItems from './pages/ManageItems/ManageItems'
import ManageCategories from './pages/ManageCategories/ManageCategories'
import Explore from './pages/Explore/Explore'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
function App() {

  return (
    <>
      <Navbar/>
      <div className="pt-18">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<ManageUsers/>} />
          <Route path="/items" element={<ManageItems/>} />
          <Route path="/categories" element={<ManageCategories/>} />
          <Route exact path="/explore" element={<Explore/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
