import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
<<<<<<< HEAD
    <Box mx={"auto"} maxW={{ base:"container.sm", md:"6xl" }} h="100%" boxSizing="border-box">
=======
    <Box mx={"auto"} maxW={{ base:"container.sm", md:"8xl" }} h="100%">
>>>>>>> e2ffae5763af8fdd9c1ae6fc5ff9ff4920ee3731
        {children}
    </Box>
  )
}

export default Container