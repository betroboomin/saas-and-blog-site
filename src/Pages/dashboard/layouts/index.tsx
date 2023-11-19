import { Box, Button, Flex, Grid, Heading, Image, Img, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { pink500, puple500 } from '../../../Component/Navbar'
import { color } from 'framer-motion'

// type Props = {}

const DashLayout = () => {
  const [toggleClick, setToggleClick] = useState(0)

  const handleToggle = (index: number)=>{
setToggleClick(index)
  }

  return (
    <Grid width='100%' gridTemplateColumns='2.5fr 1fr'>
        <Box >
<Flex bgColor='white' style={{ height:'60vh' }} p='4px' rounded='1.5rem' overflow={'hidden'}>
<Box display='flex' flexDir='column' justifyContent='space-between' h={'100%'} w='40%' rounded='1.5rem' overflow='hidden' bgImage='/imgs/woman3.webp' bgPosition='top' bgSize='cover' bgRepeat='no-repeat' >
  <Flex h='4rem' justifyContent='space-between'>

    <Flex pl='2rem' alignItems={'center'}>
      {
        userImage.map((item)=>(
<Box key={item} height='2rem' w='2rem' rounded={'full'} overflow='hidden' border={'2px'} borderColor='white' ml='-.8rem'>
  <Img src={item} height='100%' w='100%' />
</Box>
        ))
      }

    </Flex>
    <Flex flexDir='column' px='.5rem' py='.5rem' width='40%' bg={`linear-gradient(to right,${puple500}, ${pink500})`} color='white' borderBottomLeftRadius='1.5rem'>
<Text fontSize='.8rem'>Time remaining</Text>
<Flex gap='.2rem'>
  <Text fontWeight='700' fontSize='1.1rem'>14H</Text>
  <Box fontWeight='700' fontSize='1.1rem'>:</Box>
  <Text fontWeight='700' fontSize='1.1rem'>27M</Text>
  <Box fontWeight='700' fontSize='1.1rem'>:</Box>
  <Text fontWeight='700' fontSize='1.1rem'>08S</Text>
</Flex>
    </Flex>

  </Flex>
  <Flex px='1rem' justifyContent='space-between'>
    <Flex bgColor='gray.100' h='2rem' w='2rem' rounded='full' alignItems='center' justifyContent='center'>
      <Text fontSize='2rem'>{'<'}</Text>
    </Flex>
    <Flex bgColor='gray.100' h='2rem' w='2rem' rounded='full' alignItems='center' justifyContent='center'>
      <Text fontSize='2rem'>{'>'}</Text>
    </Flex>
 
</Flex>
<Box borderTop='1px' borderColor='gray.100' position={'relative'} h='4rem'   borderTopRadius='1.5rem' overflow='hidden'>
  <Flex  h='100%'  
  bgColor='rgba(0,0,0,0.2)'
  backdropFilter='blur(1rem)'
  borderRadius='1.5rem'
  overflow='hidden'
   />
   <Flex pr='1rem' w='100%' h='100%' top={0} left={0} position='absolute' justifyContent='space-between' alignItems='center'>
   <Flex flexDir='column' py='.5rem' px='1rem' color='white' h='100%' width='100%'>
<Text>
Current Price
</Text>
<Flex alignItems='center' gap='.5rem'>
<Text fontSize='1.3rem' fontWeight='700' color='white' px='.2rem' >
12,000XAF
</Text>
<Text>{'($20)'}</Text>
</Flex>

</Flex>
<Button gap='.5rem' px='2rem' rounded='full' bgColor={`${pink500}`} color='white'>
<Text>View</Text>
<Text fontSize='1.5rem'>{'>'}</Text>
</Button>
   </Flex>

</Box>
</Box>
<Flex  width='60%' flexDir='column' alignItems='center'>
  <Flex flexDir='column' alignItems='center' w='90%'>
  <Flex my='1rem' bgColor='red' backgroundColor='gray.200' width='100%' p='4px' rounded='full' >
    {
      toggleItems.map((item,i)=>(
        <Flex cursor={'pointer'} key={item} onClick={()=>handleToggle(i)} flex={1} py={".4rem"}  alignItems='center' justifyContent='center' rounded='full'
        sx={toggleClick === i ? {
          bgColor:'white',
          shadow:'0px 0px 8px rgba(0,0,0,0.3)'
        }:{}} >
  {item}
</Flex>
      ))
    }

  </Flex>
  <Flex width='100%' fontWeight='500'>
    January 01, 2023, 12:00pm
  </Flex>
  <Heading textTransform='capitalize' fontSize='2.5rem' fontFamily='montserrat' width='100%' mt='.5rem' fontWeight='700'>
    collections of cool new portraits
  </Heading>
  <Text mt='.5rem'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem deserunt odit dolorem minus, dignissimos quia repellendus cum illo dicta veritatis esse nesciunt porro blanditiis quaerat harum, reprehenderit rerum modi incidunt.
  </Text>
  <Box bgColor={'gray.100'} h='2px' w='100%' mt='.5rem' />
  <Flex alignItems='center' justifyContent='space-between' h='4rem' w='100%' mt='.5rem' py='.3rem' >
<Flex>
  <Box h='3rem' w='3rem' rounded='full' overflow='hidden'>
  <Image src='/imgs/woman6.webp' h='100%' w='100%' objectFit='cover'  />
  </Box>
  <Box pl='.5rem'>
    <Text >Creator</Text>
    <Text fontWeight='500' fontSize='1.2rem'>Isabel Robert</Text>

  </Box>
</Flex>
<Button gap='.5rem' alignItems='center' rounded='full' color='white' bgColor={`${puple500}`}>
  other works <Text fontSize='1.5rem'>{'>'}</Text>
</Button>
  </Flex>
  </Flex>
 
</Flex>

</Flex>
        </Box>













        <Box>
hi
        </Box>
    </Grid>
  )
}

const userImage = [
  "/imgs/woman.webp",
  "/imgs/woman1.webp",
  "/imgs/woman2.webp",
  "/imgs/woman3.webp",
]
const toggleItems = ["details", "contributors", "buyers"];


export default DashLayout