import { Box, Button, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

// type Props = {}

const Home = () => {
  return (
    <Box py="2rem">
        <Center>
            <Button as={Link} to="/contact-us" w="fit-content" rounded={0} bgColor="black" color="white" cursor={"pointer"} _hover={{  }}>
Contact-us
            </Button>
        </Center>
    </Box>
  )
}

export default Home