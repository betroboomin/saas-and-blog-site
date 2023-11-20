import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from '../Pages/dashboard'

// type Props = {}

const DashboardRoute = () => {
  return (
   <Routes>
    <Route path='/' element={
        <DashboardHome />
    } >
        
        </Route>
   </Routes>
  )
}

export default DashboardRoute