import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
  name:string
}

const CardOverLay = (props:Props) => {
  const {name} = props
    
  return (
    <Box   height="fit-content" bgImage="/mallchrismass.jpg" bgSize="cover" bgPosition="center" rounded="xl" overflow={'hidden'}>
      <Box  bg="rgba(255,255,255,0.9)" p="2rem 4rem" color="gray.700" fontWeight="700" fontSize="1.2rem">
        {name}
      </Box>
        
    </Box>
  )
}

export default CardOverLay