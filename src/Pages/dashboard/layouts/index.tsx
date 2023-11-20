import { Box, Button, Flex, Grid, Heading, Image, Img, Text } from '@chakra-ui/react'
import React, { useState,PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { pink500, puple500 } from '../../../Component/Navbar'
import { color } from 'framer-motion'
import Creator from '../../auth/Components/creator';
import MagicIcon from '../../../assets/icons/MagicIcon';

// type Props = {}

const DashLayout = () => {
  const [toggleClick, setToggleClick] = useState(0)

  const handleToggle = (index: number)=>{
setToggleClick(index)
  }

  return (
    <Grid width='100%' gridTemplateColumns='2.5fr 1fr'>
        <Box >
<Flex bgColor='white' style={{ height:'45vh' }} p='4px' rounded='1.5rem' overflow={'hidden'}>
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
  <Flex my='5%' bgColor='red' backgroundColor='gray.200' width='100%' p='4px' rounded='full' >
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
  <Flex width='100%' fontWeight='500' mt='3%'>
    January 01, 2023, 12:00pm
  </Flex>
  <Heading textTransform='capitalize' fontSize='300%' fontFamily='montserrat' width='100%' mt='5%' fontWeight='700'>
    collections of cool new portraits
  </Heading>
  <Text my='2%
  ' fontSize={{base:"", md:"" , lg:"3rem" , xl:'1rem', xxl:'3rem'}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem deserunt odit dolorem minus, dignissimos quia repellendus cum illo dicta veritatis esse nesciunt porro blanditiis quaerat harum, reprehenderit rerum modi incidunt.
  </Text>
  <Box bgColor={'gray.100'} h='2px' w='100%' mt='1%' />
  <Flex alignItems='center' justifyContent='space-between' h='4rem' w='100%' mt='1%' py='.3rem' >
<Creator />
<Button gap='.5rem' alignItems='center' rounded='full' color='white' bgColor={`${puple500}`}>
  other works <Text fontSize='1.5rem'>{'>'}</Text>
</Button>
  </Flex>
  </Flex>
 
</Flex>

</Flex>
        </Box>













        <Box pl='1rem' >
<Box bgColor='white' h='100%' rounded='1.5rem' p='4px' overflowY='auto' style={{scrollbarWidth:'none'}}>
  <Box bgColor='purple.800' color='white' rounded='1.5rem' px='1rem' py='.5rem' >
<Flex alignItems='center'  justifyContent='space-between'>
  <Text fontSize='1.2rem' fontWeight='500' py='1rem'>
    Your <span style={{color:`${pink500}`}}>Expenditure</span>
  </Text>
  <Text>
  •••
  </Text>
</Flex>
<Box height='2px' w='100%' bgColor='gray.500' mb='1rem'/>
<Flex justifyContent='space-between'>
  {
    currency.map((item,i)=>(
<Flex key={i} gap='.5rem' boxShadow={`0px 0px 10px 5px ${item.color}` } bg={item.bgcColor} color={item.color} p='.2rem .6rem' rounded='full'>
  • <Text>{item.name}</Text>
  </Flex>
    ))
  }
  
</Flex>
<Flex py='1rem' bg={'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.05))'} px='1rem' rounded='1.5rem' mt='1rem' flexDir='column'>
<Flex color='gray.300' justifyContent='space-between' width='100%' >
  <Text>
    Total Spent
  </Text>
  <Box>
    <Text>
      +41.2%
    </Text>
  </Box>
</Flex>
<Flex fontSize='2rem' fontWeight='600'>
  28,672.87XAF
</Flex>
<Flex h='8rem'>
<ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
</Flex>



</Flex>
<Button w='100%' mt='1rem' color='white' bgColor={`${pink500}`}  rounded='full' mb='1rem'>
  Top up
</Button>

  </Box> 
  <Flex width='100%' justifyContent='space-between' mt='1rem' px='1rem'>
    <Text>
      Featured creators
    </Text>
    <Text color='gray.500'>
     { 'see all >'}
    </Text>
  </Flex>
  <Box px='1rem' my='1rem'>
  <Flex h='2px' w='100%' bgColor='gray.200'/>
  </Box>
  
  <Flex mt='1rem' px='1rem' alignItems='end' justifyContent='space-between'>
  <Creator />
  <Flex bgColor={`${puple500}`} p='.1rem .5rem' rounded='full' color='white'>
    <Text><span style={{ fontSize:'1.1rem'}}>+</span> Follow</Text>
  </Flex>
  </Flex>

  <Flex width='100%' mt='1rem' px='1rem' gap=' 1rem'>
    {
      userImage.slice(0,2).map((item)=>(
        <Box key={item} w='50%' rounded='1.5rem' border='2px' borderColor='gray.200' overflow='hidden' p='2px' >
        <Box width={'100%'} rounded='1.5rem' height='9rem' overflow='hidden'>
        <Image objectFit='cover' objectPosition='top' src={item} h='100%' w='100%'  />
        </Box>
        <Text px='.5rem' mt='.5rem' fontWeight='500'>
          Melissa Portrait
        </Text>
        <Flex px='.5rem' mt='.5rem' gap='.5rem' alignItems='center' mb='.5rem'>
          <Flex alignItems='center' justifyContent='center' rounded='full' h='2rem' w='2rem' bgColor='purple.200' >
            <MagicIcon width='50%' height='50%'/>
          </Flex>
          <Text fontWeight='600' fontSize='1.2rem'>
            6000XAF
          </Text>
        </Flex>
  
      </Box>
      
      ))
    }
  
  </Flex>
  <Flex width='100%' justifyContent='space-between' mt='1.5rem' px='1rem'>
    <Text>
     History
    </Text>
    <Text color='gray.500'>
     { 'see all >'}
    </Text>
  </Flex>
  <Flex mt='1rem'>
<Creator />
  </Flex>
  <Flex mt='1rem'>
<Creator />
  </Flex>
  <Flex mt='1rem'>
<Creator />
  </Flex>
  
</Box>
        </Box>
    </Grid>
  )
}

const currency = [
  {
    name: "XAF",
    color: "red.100",
    bgcColor: "red.700",
  },
  {
    name: "USD",
    color: "green.100",
    bgcColor: "green.700",
  },
  {
    name: "ETH",
    color: "yellow.100",
    bgcColor: "yellow.700",
  },
  {
    name: "BTC",
    color: "pink.100",
    bgcColor: "pink.700",
  },
];


const userImage = [
  "/imgs/woman.webp",
  "/imgs/woman1.webp",
  "/imgs/woman2.webp",
  "/imgs/woman3.webp",
]
const toggleItems = ["details", "contributors", "buyers"];
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default DashLayout