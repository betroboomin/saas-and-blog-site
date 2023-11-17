import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <Box mx={"auto"} maxW={{ base:"container.sm", md:"8xl" }} h="100%">
        {children}
    </Box>
  )
}

export default Container