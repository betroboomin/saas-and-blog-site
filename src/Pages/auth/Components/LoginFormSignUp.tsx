import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { pink500 } from '../../../Component/Navbar'
import { useNavigate } from 'react-router-dom'

// type Props = {}

const LoginFormSignUp = () => {
  const navigate = useNavigate()
  const onSubmit = ()=>{
    navigate('/dashboard')
  }
  return (
    <form onSubmit={onSubmit}>
        <Flex gap='1rem'>
        <FormControl mt='1rem'>
        <FormLabel fontFamily='montserrat'>
            Name:
        </FormLabel>
        <Input
          type='text'
          placeholder='EX: Brandon'  
        />
        <FormErrorMessage>

        </FormErrorMessage>
    </FormControl>
    <FormControl mt='1rem'>
        <FormLabel fontFamily='montserrat'>
            Surname: 
        </FormLabel>
        <Input
          type='text'
          placeholder='EX: Atanga'  
        />
        <FormErrorMessage>

        </FormErrorMessage>
    </FormControl>
        </Flex>
   
    <FormControl mt='1rem'>
        <FormLabel fontFamily='montserrat'>
            Email:
        </FormLabel>
        <Input
          type='email'
          placeholder='EX: leonelmessi@gmail.com'  
        />
        <FormErrorMessage>

        </FormErrorMessage>
    </FormControl>
    <Flex gap='1rem'>
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
    <FormControl mt="1rem">
        <FormLabel fontFamily='montserrat'>
           Confirm Password:
        </FormLabel>
        <Input
          type='password'
          placeholder='EX: •••••••••'  
        />
        <FormErrorMessage>
            
        </FormErrorMessage>
    </FormControl>
    </Flex>
   
    <Button type='submit' width="100%" mt="1rem" bgColor={`${pink500}`} color='white'>
        Submit
    </Button>
    
</form>
  )
}

export default LoginFormSignUp