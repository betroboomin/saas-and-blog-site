import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/auth/Login'
import SignUp from '../Pages/auth/SignUp'

type Props = {
    isNav : (a:boolean)=>void
}

const AuthRoute = (props:Props) => {
    const {isNav} = props
    isNav(false)
  return (
    
     <Routes>
        
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
       
      </Routes> 
    
    
  )
}

export default AuthRoute