import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

// type Props = {}

const Navbar = () => {
    const puple500 = "#805AD5"
    const pink500 = "#D53F8C"
  return (
    <Flex position="fixed" color="white"  bgColor="rgba(0,0,0,0.7)" alignItems="center" height="4rem" px= 
    "4rem"  justifyContent="space-between" width="100%" transform="skew(-20deg)">
<Box fontSize="2rem">Logo</Box>
<Flex height="100%" gap="1rem" fontSize="1.2rem" transform="skew(20deg)" alignItems="center">
    {
        navbarLinks.map((item)=>(
<Text key={item.id} cursor="pointer"  p=".2rem 1rem  " display="flex" alignItems="center" _hover={{ bgColor:"white", color:"black", }}>
{item.title}
    </Text>
        ))
    }
    
   
</Flex>
<Box bg={`linear-gradient(to left, ${puple500},${pink500})`}>
<Flex gap="3rem" fontSize="1.2rem" transform="skew(20deg)" h="100%" width="20rem" py=".5rem" justifyContent="flex-end" px="2rem">
    <Flex height="100%" alignItems={"center"} >
    <Text color="black" bgColor="white" fontWeight="600" p=".4rem 1rem" rounded="full">
  signUp
  </Text>
    </Flex>
 
    
   
</Flex>
</Box>

    </Flex>
  )
}
const navbarLinks = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Services', url: '/services' },
    { id: 4, title: 'Products', url: '/products' },
    { id: 5, title: 'Contact', url: '/contact' },
  ];
export default Navbar