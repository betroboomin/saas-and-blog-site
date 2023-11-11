import { Box } from '@chakra-ui/react'
import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import ContactUs from '../Pages/ContactUs'
import MarketHome from '../Pages/Market'

// type Props = {}

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/market' element={<MarketHome />} />
        
    </Routes>
  )
}

export default Routing