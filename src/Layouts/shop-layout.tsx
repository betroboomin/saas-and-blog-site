import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {ShopNavbar} from '../Components/Shop-navbar'
import ShopSide from '../Components/ShopSide'

type Props = {
    children: React.ReactNode
}

const ShopLayout = (props: Props) => {
    const {children} = props
  return (
    <Box>
      <ShopNavbar />
      <Flex position="relative">
      <ShopSide />
        {children}
      </Flex>
     
    </Box>
  )
}

export default ShopLayout