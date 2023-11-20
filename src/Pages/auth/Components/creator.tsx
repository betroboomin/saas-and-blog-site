import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Creator = (props: Props) => {
  return (
    <Flex>
  <Box h='3rem' w='3rem' rounded='full' overflow='hidden'>
  <Image src='/imgs/woman6.webp' h='100%' w='100%' objectFit='cover'  />
  </Box>
  <Box pl='.5rem'>
    <Text >Creator</Text>
    <Text fontWeight='500' fontSize='1.2rem'>Isabel Robert</Text>

  </Box>
</Flex>
  )
}

export default Creator