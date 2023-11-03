import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

// type Props = {}

const Navbar = () => {
  return (
    <Flex position="fixed" color="white" px=
    "4rem" py="2rem" justifyContent="space-between" width="100%">
<Box fontSize="2rem">Logo</Box>
<Flex gap="3rem" fontSize="1.2rem">
    <Text cursor="pointer"  p=".2rem 1rem  " display="flex" alignItems="center" _hover={{ bgColor:"white", color:"black", }}>
Home
    </Text>
    <Text cursor="pointer" p=".2rem 1rem  " display="flex" alignItems="center" _hover={{ bgColor:"white", color:"black", }}>
About us
    </Text>
    <Text cursor="pointer" p=".2rem 1rem  " display="flex" alignItems="center" _hover={{ bgColor:"white", color:"black", }}>
Contact us
    </Text>
</Flex>
    </Flex>
  )
}

export default Navbar