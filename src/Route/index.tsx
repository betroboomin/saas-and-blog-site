import { Box } from '@chakra-ui/react'
import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/home/Home'

// type Props = {}

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        
        
    </Routes>
  )
}

export default Routing