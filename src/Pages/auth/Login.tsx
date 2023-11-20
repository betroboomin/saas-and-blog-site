import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import LoginForm from './Components/loginForm';
import { pink500 } from '../../Component/Navbar';
import { Link } from 'react-router-dom';

// type Props = {}

const Login = () => {
  return (
    <Flex height="100vh">
      <Box
        height={"100%"}
        width="100%"
        bgImage="/mall-interior.jpg"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        <Flex
          height="100%"
          w="100%"
          backdropFilter="saturate(0.2) blur(.2rem)"
          alignItems="center"
          justifyContent="center"
        >
          <Box bgColor="white" px={"4rem"} py='3rem' rounded='xl'>
            <Heading fontSize="2rem" textAlign="center" mb='2rem'>Login</Heading>
            <LoginForm />
            <Text my='1rem' color={`${pink500}`}>Forgot password?</Text>
            <Text  >
              Don't have an account yet?{" "}
              <Link to='/ENo/signup'><span style={{ color: `${pink500}` }}>SignUp</span></Link>
            </Text>
          </Box>
        </Flex>{" "}
      </Box>
    </Flex>
  );
}

export default Login