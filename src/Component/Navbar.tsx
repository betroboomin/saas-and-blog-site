import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link} from "react-router-dom";

import SettinIcon from "../assets/icons/setting-icon";
import UserIcon from "../assets/icons/user-icon";
import SignOutIcon from "../assets/icons/signout-icon";


// type Props = {}
export const puple500 = "#805AD5";
 export  const pink500 = "#D53F8C";
const Navbar = () => {
//   const [searchParams] = useSearchParams();
//   const currentLink = searchParams.get('to')
//  console.log({currentLink})
  

  const [isActive, setIsActive] = useState<number | null>(null);
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  const handleProfile = ()=>{
    setIsProfileClicked(!isProfileClicked)
  }

  const handleIsActive = (index: number) => {
    setIsActive(index);
  };
  return (
    <Box position="fixed" bgColor="rgba(0,0,0,0.7)" width="100%" height="4rem" zIndex={100}>
      <Flex
        color="white"
        alignItems="center"
        height="100%"
        px="4rem"
        justifyContent="space-between"
        width="100%"
        transform="skew(-20deg)"
      >
        <Box fontSize="2rem">Logo</Box>
        <Flex
          height="100%"
          gap=""
          fontSize="1.2rem"
          transform="skew(20deg)"
          alignItems="center"
        >
          {navbarLinks.map((item) => (
            <Text
              key={item.id}
              cursor="pointer"
              p=".2rem 2rem  "
              display="flex"
              alignItems="center"
              style={
                isActive === item.id ? { height: "100%", color: "black" } : {}
              }
              height="100%"
              position="relative"
              overflow="hidden"
              _hover={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  bgColor: `${pink500}`,
                  top: "0px",
                  left: "0px",
                  transition: "ease-in-out .5s",
                  transform: "translateX(0%)",
                },
              }}
              sx={
                isActive === item.id
                  ? {
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        bgColor: "white",
                        top: "0px",
                        left: "0px",
                        transition: "ease-in-out .5s",
                        transform: "translateX(0%)",
                      },
                    }
                  : {
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        top: "0px",
                        left: "0px",
                        transition: "ease-in-out .5s",
                        transform: "translateX(-100%)",
                      },
                    }
              }
              onClick={() => handleIsActive(item.id)}
            >
              <Link to={item.url}>
              <Text as="span" position="relative" color="">
                {item.title}
              </Text>
              </Link>
              
            </Text>
          ))}
        </Flex>
        <Box bg={`linear-gradient(to left, ${puple500},${pink500})`}>
          <Flex
            gap="3rem"
            fontSize="1.2rem"
            transform="skew(20deg)"
            h="100%"
            width="20rem"
            py=".5rem"
            justifyContent="flex-end"
            px="2rem"
          >
            <Flex height="100%" alignItems={"center"} gap="1rem">
              <Link to='/ENo/signup'>
              <Text
                color="black"
                bgColor="white"
                fontWeight="600"
                p=".4rem 1rem"
                rounded="full"
              >
                signUp
              </Text>
              </Link>
             
              <Link to="/ENo/login">
              <Text
                color="black"
                bgColor="white"
                fontWeight="600"
                p=".4rem 1rem"
                rounded="full"
              >
                login
              </Text>
              </Link>
              
              <Box width="fit-content" position="relative" onClick={handleProfile}>
                <Box
                  transform="translateX(5px)"
                  height="15px"
                  width="15px"
                  bgColor="green"
                  pos={"absolute"}
                  right="0"
                  zIndex={2}
                  border="2px"
                  rounded="full"
                ></Box>
                <Box
                  cursor="pointer"
                  bgColor="white"
                  width="50px"
                  height="50px"
                  rounded="full"
                  overflow="hidden"
                  style={isProfileClicked ? {
                    backgroundColor:`${pink500}`,
                    fill:"white"
                  }:{}}
                >
                  <UserIcon height="100%" width="100%" />
                </Box>
                <Box position="absolute"  bgColor="white" color="black" width="180px" right="0" px="1rem" justifyContent="center"
                style={isProfileClicked ? {
                  opacity:"1",
                  marginTop:"1.5rem",
                  transition:"ease-in-out .3s",
                  
                }:{
                  opacity:"0",
                  marginTop:"3rem",
                  transition:"ease-in-out .3s"
                }}
                >
                  <Box position="relative">
                  <Flex borderBottom="2px" gap="1rem" borderColor="gray.300" justifyContent={"center"} alignItems="center">
                    <Box width="1.5rem" bgColor="pink.500" fill="white" rounded="full">
                      <UserIcon width="100%" height="100%" />
                    </Box>
                  <Text  py=".5rem"  >
                    Profile
                  </Text>
                  </Flex>
                  <Flex borderBottom="2px" gap="1rem" borderColor="gray.300" justifyContent={"center"} alignItems="center">
                    <Box width="1.5rem">
                      <SettinIcon width="100%" height="100%" />
                    </Box>
                  <Text  py=".5rem"  >
                    settings
                  </Text>
                  </Flex>
                  <Flex borderBottom="2px" gap="1rem" borderColor="gray.300" justifyContent={"center"} alignItems="center">
                    <Box width="1.5rem"  height="2rem">
                      <SignOutIcon width="100%" height="100%" />
                    </Box>
                  <Text  py=".5rem"  >
                    signout
                  </Text>
                  </Flex>
                  </Box>
                  <Box height="1rem" width="1rem" bgColor="white" position="absolute" top={0} right="1.5rem" transform="rotate(45deg) translateY(-.8rem)">

                  </Box>
                  
                  
                  
                  
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
const navbarLinks = [
  { id: 1, title: "Home", url: "" },
  { id: 2, title: "About", url: "about/" },
  { id: 3, title: "Services", url: "services/" },
  { id: 4, title: "Products", url: "products/" },
  { id: 5, title: "Contact", url: "contact/" },
];
export default Navbar;
