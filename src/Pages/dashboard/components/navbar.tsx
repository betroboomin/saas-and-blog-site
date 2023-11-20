import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { pink500 } from '../../../Component/Navbar';

type Props = {
    navlist: string[]
}

const NavbarDashboard = (props: Props) => {
    const {navlist} = props
  return (
    <Flex
    position={"fixed"}
    top={0}
    alignItems="center"
    height="4rem"
    w="100%"
    px="1rem"
  >
    <Flex
      flexDir="column"
      width="fit-content"
      alignItems="center"
      gap="8px"
    >
      <Heading
        border="2px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderColor={`${pink500}`}
        fontFamily="foldit"
        h="3rem"
        w="3rem"
        rounded="full"
        fontSize={"3rem"}
        textAlign="center"
      >
        s
      </Heading>
    </Flex>
    <Flex pl="2rem" justifyContent="space-between" width="100%">
      <Flex gap="1rem" w="fit-content">
        {navlist.map((item) => (
          <Button
            key={item.name}
            rounded="full"
            bgColor="#0f0f0f"
            color="white"
          >
            {item.name}
          </Button>
        ))}
      </Flex>
      <Flex w="fit-content" gap="1rem">
        <Input placeholder="search" w="20rem" rounded="full" px="1.5rem" />
        <Box h="100%" w="2px" bgColor="gray.200" />
        <Button
          px="2rem"
          rounded="full"
          bgColor={`${pink500}`}
          color="white"
        >
          connect wallet
        </Button>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default NavbarDashboard