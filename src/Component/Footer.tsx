
import React, { useState } from 'react'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom';

// type Props = {}

const Footer = () => {
  const [activeLink, setActiveLink] = useState<number | null>(0)
  const [activeSocialLink, setActiveSocialLink] = useState<number | null>(0)

  const handleActiveLink=(index:number)=>{
setActiveLink(index)
  }
  const handleActiveSocialLink=(index:number)=>{
    setActiveSocialLink(index)
      }
  function extractFirstLetters(item: string) {
    const firstLetters =  item.charAt(0);
    return firstLetters;
  }

  return (
    <Box>
 <Box py="2rem" px="4rem" bgColor="#0f0f0f" color="white">
     <Center flexDir="column">
      <Flex alignItems={"center"} flexDir="column" gap=".5rem">
      <Heading fontSize="2.5rem" fontFamily="foldit">The Spotlight</Heading>
      <Box h="4px" bgColor="pink.500" width="70%"></Box>
      <Box>

      </Box>
      </Flex>
      <Flex gap="2rem" mt="2rem">
        {
          footerLinks.map((item, i)=>(
<Text as={Link} key={i} onClick={()=>handleActiveLink(i)} color={activeLink === i ? "pink.500" : "white"} fontWeight={activeLink === i ? "700" : ""}>
{item.name}
</Text>
          ))
        }


      </Flex>
      <Flex gap="2rem" mt="2rem">
      {
        socialMediaPlatforms.map((item,i)=>(

      <Text key={i}
      style={
        activeSocialLink === i ? {
          color:"#D53F8C",
          fontWeight:"700",
        } : {}
      }
       bgColor={activeSocialLink === i ? "white" : ""} p=".5rem 1rem" onClick={()=>handleActiveSocialLink(i)} rounded="full" cursor="pointer" border="1px">
        {extractFirstLetters(item.name)}
      </Text>
     
        ))
      }
      </Flex>
      <Text width="50%" mt="2rem" lineHeight={2} textAlign="center" color="gray.400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti veniam distinctio omnis ipsa corporis ratione iure, nam vel sit, maxime sapiente fuga! Deserunt vero ipsa quas nam, ipsum cupiditate?
      </Text>
      
     

     </Center>
     
    </Box>
    <Center borderTop="2px" py=".5rem" borderColor="pink.500" color="black">
    <Text>
      powered by <Text as="span" color="pink.500">BackTuf</Text>, developed by <Text as="span" color="pink.500">Kodiah Bertrand</Text>
    </Text>
   </Center>
    </Box>
   
  )
}
const footerLinks = [
  { name: 'Home' },
  { name: 'About Us' },
  { name: 'Services' },
  { name: 'Products' },
  { name: 'Contact Us' },
  { name: 'FAQ' },
  { name: 'Privacy Policy' }
];
const socialMediaPlatforms = [
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
  { name: 'YouTube', url: 'https://www.youtube.com' },
  { name: 'Pinterest', url: 'https://www.pinterest.com' }
]


export default Footer