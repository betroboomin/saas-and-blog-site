import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Route'
import { Box } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box fontFamily="poppins" fontSize={".9rem"}>
    <BrowserRouter>
       <Routing />
    </BrowserRouter>
     
    </Box>
  )
}

export default App
