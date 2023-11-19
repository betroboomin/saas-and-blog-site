import React from 'react'
import BasicLayout from '../Layouts/BasicLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/home/Home'
import About from '../Pages/about/About'

type Props = {
    isNav : (a:boolean)=> void
}

const PagesWithNav = (props: Props) => {
    const {isNav} = props

   isNav(true)
  return (
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    
    </Routes>

     
    
    
  
  )
}

export default PagesWithNav