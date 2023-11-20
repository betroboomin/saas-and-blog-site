import { Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { pink500, puple500 } from '../../../Component/Navbar'

// type Props = {}

const LoginForm = () => {
  return (
    <form>
        <FormControl>
            <FormLabel fontFamily='montserrat'>
                Email:
            </FormLabel>
            <Input
              type='text'
              placeholder='EX: leonelmessi@gmail.com'  
            />
            <FormErrorMessage>

            </FormErrorMessage>
        </FormControl>
        <FormControl mt="1rem">
            <FormLabel fontFamily='montserrat'>
                Password:
            </FormLabel>
            <Input
              type='password'
              placeholder='EX: •••••••••'  
            />
            <FormErrorMessage>
                
            </FormErrorMessage>
        </FormControl>
        <Button width="100%" mt="1rem">
            Submit
        </Button>
        
    </form>
  )
}

export default LoginForm