import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    imageIcon?: string[]
    heading:string
    icon:React.ReactNode
    seeMore?: boolean
}

const LargeCard = (props: Props) => {
    const {imageIcon, icon, heading, seeMore} =props
  return (
    <Flex
                
                border="1px"
                borderColor="gray.200"
                width="fit-content"
                rounded="lg"
                padding="1rem "
                flexDir="column"
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Box
                    p={"5px"}
                    width="2rem"
                    h="2rem"
                    border="2px"
                    borderColor="gray.500"
                    fill="gray.600"
                    rounded={"full"}
                  >
                    {icon}
                  </Box>
                  <Flex
                    gap="1.5rem"
                    alignItems="center"
                    rounded="full"
                    color="gray.600"
                    padding=".6rem"
                    bgColor="gray.200"
                  >
                    <Heading fontSize="1.2rem" rounded="full">
                      Mentor
                    </Heading>
                    <Flex>
                      {imageIcon && imageIcon.map((item, i) => (
                        <Box
                          key={i}
                          w="2rem"
                          h="2rem"
                          rounded="full"
                          overflow="hidden"
                          marginLeft="-1rem"
                          border="2px"
                          borderColor="white"
                        >
                          <Image
                            src={item}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Box>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mt="1rem" flexDir="column">
                  <Heading fontSize="1.3rem" color="gray.700">{heading}</Heading>
                  <Text mt=".8rem" color="gray.600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magnam non ipsam assumenda doloribus laboriosam nesciunt, suscipit ex fuga! Nemo tenetur vitae ipsa eveniet accusantium animi magni aliquam quo cumque?
                  </Text>
                  {
                    seeMore && (<Text mt=".8rem">
                    See more...
                  </Text>)

                  }
                  
                </Flex>
              </Flex>
  )
}

export default LargeCard