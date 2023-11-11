import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

// type Props = {}

const Navbar = () => {
  const puple500 = "#805AD5";
  const pink500 = "#D53F8C";

  const [isActive, setIsActive] = useState<number | null>(0)

  const handleIsActive = (index:number)=>{

    setIsActive(index)
  }
  return (
    <Flex
      position="fixed"
      color="white"
      bgColor="rgba(0,0,0,0.7)"
      alignItems="center"
      height="4rem"
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
              isActive === item.id
                ? { height: "100%", color: "black" }
                : {}
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
                      transition:"ease-in-out .5s",
                      transform:"translateX(0%)"
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
                      transition:"ease-in-out .5s",
                      transform:"translateX(0%)"

                    },
                  }
                : {"&::before": {
                  content: '""',
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  left: "0px",
                  transition:"ease-in-out .5s",
                  transform:"translateX(-100%)"

                },}
            }
            onClick={() => handleIsActive(item.id)}
          >
            <Text as="span" position="relative" color="">{item.title}</Text>
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
          <Flex height="100%" alignItems={"center"}>
            <Text
              color="black"
              bgColor="white"
              fontWeight="600"
              p=".4rem 1rem"
              rounded="full"
            >
              signUp
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
const navbarLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Products", url: "/products" },
  { id: 5, title: "Contact", url: "/contact" },
];
export default Navbar;
