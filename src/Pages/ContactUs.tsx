import { Box, Button, Flex, Heading, TagRightIcon, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../Layouts/Container";
import { ButtonOutLined, Buttons } from "../Components/Button";

// type Props = {}

const ContactUs = () => {
  return (
    <Box>
      <Container>
        <Flex py="6rem" height="100vh" alignItems="center">
          <Box flex={1}>
            <Heading textTransform="capitalize">Reach out to us</Heading>
            <Text pr="2rem" textAlign="justify" mt="2rem">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              inventore odit enim reprehenderit vitae dolorum repudiandae odio
              quam aut aspernatur eum, laudantium possimus esse distinctio iste?
              Sequi vel aspernatur hic!
            </Text>
            <Flex gap="2rem" mt="2rem">
              <Buttons to="">hello</Buttons>
              
              <ButtonOutLined to="">Hello</ButtonOutLined>
            </Flex>
          </Box>
          <Box
            flex={1}
            height="100%"
            position={"relative"}
            boxSizing="border-box"
          >
            <Box
              width="70%"
              bgImage="/mall-interior.jpg"
              
              bgSize="cover"
              bgRepeat="no-repeat"
              h="70%"
              backdropFilter="saturate(0) contrast(1.2)"
              position="relative"
            >
             
            </Box>
            <Box
              width="60%"
              bgImage="/mall-interior.jpg"
              
              bgSize="cover"
              bgRepeat="no-repeat"
              h="70%"
              backdropFilter="saturate(0) contrast(1.2)"
              position="absolute"
              top="30%"
              left="50%"
            >
             
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUs;
