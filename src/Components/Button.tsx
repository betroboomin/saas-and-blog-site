import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    to: string
    children: React.ReactNode

}

export const Buttons = ({to, children,...props}: Props) => {
  return (
    <Button gap="1rem" as={Link} to={to} rounded={0} px={"1.5rem"} py=".2rem" bgColor="black" color="white" _hover={{  }} {...props}>
       {children}
    </Button>
  )
}

export const ButtonOutLined = ({to,children, ...props}:Props) => {
    return(
        <Button gap="1rem" as={Link} to={to} rounded={0} px={"1.5rem"} py=".2rem" border={"2px"} bgColor="transparent" _hover={{  }} {...props}>
{children}
        </Button>
    )
}