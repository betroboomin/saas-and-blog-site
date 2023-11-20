import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../Layouts/Container";
import BasicLayout from "../Layouts/BasicLayout";

// type Props = {}

const Home = () => {
  return (
    <BasicLayout>

      <Box
        bgImage="linear-gradient(to top, black, transparent),url(/spotlight.jpg)"
        bgSize="cover"
        bgPos="bottom"
        bgRepeat="no-repeat"
        height="100vh"
      >
        <Container>
          <Flex height="100%" alignItems="flex-end">
            <Box width="fit-content" mb="2rem">
                <Box position={"relative"}>
                <Text mx="auto" color="white" fontWeight="700" fontSize="1.2rem" width="10rem">
                        Authentic & True
                    </Text>
                    
                    
                </Box>
                <Box bg="linear-gradient(to left, transparent, white, transparent)" mt="1rem" height="4px">
                    </Box>
              <Text fontFamily="Foldit" fontSize="8rem" mt="1rem">
                The Spotlight
              </Text>
              <Box bg="linear-gradient(to left, transparent, white, transparent)" height="4px">
                    </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

    </BasicLayout>
   
  );
};

export default Home
