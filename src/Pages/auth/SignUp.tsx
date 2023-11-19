import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { pink500 } from '../../Component/Navbar'
import LoginForm from './Components/loginForm'
import LoginFormSignUp from './Components/LoginFormSignUp'
import { Link } from 'react-router-dom'

// type Props = {}

const SignUp = () => {
  return (
    <Flex height="100vh">
      <Box
        height={"100%"}
        width="100%"
        bgImage="/mallchrismass.jpg"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        <Flex
          height="100%"
          w="100%"
          backdropFilter="saturate(0.2) blur(.2rem) brightness(0.2)"
          alignItems="center"
          justifyContent="center"
        >
          <Box bgColor="white" px={"4rem"} py="3rem" rounded="xl">
            <Heading
              fontSize="2rem"
              textAlign="center"
              mb="2rem"
              color={`${pink500}`}
            >
              Sign Up
            </Heading>
            <LoginFormSignUp />
            {/* <Text my='1rem' color={`${pink500}`}>Forgot password?</Text> */}
            <Text textAlign="end" mt="1rem">
              already have an account?{" "}
              <Link to="/ENo/login">
                <span style={{ color: `${pink500}` }}>login</span>
              </Link>
            </Text>
          </Box>
        </Flex>{" "}
      </Box>
    </Flex>
  );
}

export default SignUp