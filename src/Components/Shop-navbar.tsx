import { Box, Button, Flex, Heading, Input, Text, border } from "@chakra-ui/react"
import { useState } from "react"
import UserIcon from "../assets/Icons/user-icon"

export const ShopNavbar = ()=>{

    const [searchValue, setSearchValue] = useState("")
    const handleOnchange = (e)=>{
const input = e.target.value
setSearchValue(input)
    }

    return(
        <Flex position={"fixed"} top={0} zIndex={50} height="fit-content" width="100%" gap="2rem" px="1rem" py="1rem"borderBottom="1px" borderColor="gray.200" bgColor="gray.50">
            <Heading>
Boomin.e
            </Heading>
            <Box width="100%"  position="relative">
                <Text position="absolute" py=".55rem" left=".5rem" color="gray.200">
                    Search...
                </Text>
                <input
                style={{ padding:".7rem 5rem", width:"100%", border:"1px" }}
                // ={{borderColor="black"}}
                // pl={"5rem"}
                name="search"
                value={searchValue}
                onChange={handleOnchange}
                // _focus={{ borderColor:"black" }}
                width="100%"
                />
            </Box>
            <Flex gap="1rem">
                <Button color="white" bg="linear-gradient(to left, #0f0f0f, var(--chakra-colors-pink-700))" _hover={{  }}>
SignUp
                </Button>

            <Box position="relative">
            <Button p={0} bgColor="#0f0f0f" fill="white" color="white" rounded="full"  _hover={{  }}>
               <UserIcon width="1.5rem" hight="1rem" />
            </Button>
             <Box h="1rem" w="1rem" bgColor="skyblue" border="4px" rounded={"full"} borderColor="white" position="absolute"top={0} right={0} transform="translateX(5px)">
                
             </Box>
                </Box>
            </Flex>
            
        </Flex>
    )
}