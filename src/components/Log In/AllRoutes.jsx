import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default AllRoutes