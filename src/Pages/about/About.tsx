import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import BasicLayout from '../../Layouts/BasicLayout'
import { pink500 } from '../../Component/Navbar'
import Profilepicture from './components/profilepicture'

// type Props = {}

const About = () => {
  return (
  <Box>
    <Box>
        <Box
        bgImage="/spotlight.jpg"
        bgPos="bottom"
        bgSize="cover"
        bgRepeat="no-repeat"
        height="400px"
        position="relative"
        display="flex"
        alignItems="center"
        >
            <Box
            h="100%"
            position="absolute"
            width="100%"
            bg="linear-gradient(to top, transparent, #0f0f0f,black)"
            >

            </Box>
            <Flex pos="relative" width="100%" flexDir="column" alignItems="center">
            <Heading 
            textAlign="center"
            width="100%"
            fontSize="5rem"
            fontFamily="foldit"
            >
The Spotlight
            </Heading>
            <Box height="4px" bgColor={pink500} 
             width="30%"
            >

            </Box>
            </Flex>
            

        </Box>
        <Flex justifyContent="center" >
            <Profilepicture />
        </Flex>
    </Box>
  </Box>
  )
}

export default About