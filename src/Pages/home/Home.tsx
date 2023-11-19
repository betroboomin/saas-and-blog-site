import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { PureComponent } from "react";

import BasicLayout from "../../Layouts/BasicLayout";
import SettinIcon from "../../assets/icons/setting-icon";
import { pink500, puple500 } from "../../Component/Navbar";
import CardOverLay from "../../Component/cardOverLay";
import Container from "../../Layouts/Container";
import LargeCard from "./components/LargeCard";
import ScrollCarousel from 'scroll-carousel-react';
import MagicIcon from "../../assets/Icons/MagicIcon";

// type Props = {}

const Home = () => {
const handleMargin = (i:number)=> {
  const mt = imageTops[i % imageTops.length]
  return mt
}
  return (
    <Box>
      <Box>
        <Box
          bgImage="linear-gradient(to top, black, transparent),url(/spotlight.jpg)"
          bgSize="cover"
          bgPos="bottom"
          bgRepeat="no-repeat"
        >
          <Container>
            <Flex
              justifyContent="center"
              flexDir="column"
              color="white"
              height="100vh"
            >
              <Box width="fit-content" mb="2rem">
                <Box position={"relative"}>
                  <Text
                    mx="auto"
                    color="white"
                    fontWeight="700"
                    fontSize="1.2rem"
                    width="100%"
                    textAlign="center"
                  >
                    Authentic & True
                  </Text>
                </Box>
                <Box
                  bg="linear-gradient(to left, transparent, white, transparent)"
                  mt="1rem"
                  height="4px"
                ></Box>
                <Text fontFamily="Foldit" fontSize="8rem" mt="1rem">
                  The Spotlight
                </Text>
                <Box
                  bg="linear-gradient(to left, transparent, white, transparent)"
                  height="4px"
                ></Box>
              </Box>
              <Box  width="45%">
                <Flex
                  px="1rem"
                  alignItems={"center"}
                  padding=".5rem 1rem"
                  gap="2rem"
                  bg={`linear-gradient(to left,${pink500}, ${puple500})`}
                  bgClip="text"
                >
                  {/* <SettinIcon
                    width="2rem"
                    height="2rem"
                    fill={`linear-gradient(to left,${pink500}, ${puple500})`}
                  /> */}
                  <Text fontSize={"1.5rem"} width="100%" textAlign="center" fontWeight="700">
                    Socialise and market...
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box
          // bgColor="red"
          mt="2rem"
          display="flex"
          gap="3rem"
          justifyContent="center"
          className="my-carousel"
        >
          <ScrollCarousel autoplay>
            {cardName.map((item, i) => (
              <Box key={i} mt="" className="my-slide">
                <CardOverLay name={item} />
              </Box>
            ))}
          </ScrollCarousel>
        </Box>
        <Box
          color="black"
          display="flex"
          flexDir="column"
          height="100%"
          py="5rem"
        >
          <Container>
            <Flex my="2rem" flexDir="column" alignItems="center">
              <Heading
                mt="1rem"
                display="flex"
                fontFamily="Poppins"
                color="gray.600"
                justifyContent="center"
              >
                Explore our Power
              </Heading>
              <Text mt="1rem" textAlign="center" width="60%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate reiciendis impedit, autem consequatur ipsum similique
                onsectetur adipisicing elit. Voluptate reiciendis impedit,
              </Text>
            </Flex>
            <Flex gap="2rem" flexWrap={"wrap"}>
              {Cardheading.map((item, i) => (
                <Box key={i} flex="0 0 31.33%">
                  <LargeCard
                    heading={item}
                    imageIcon={imageIcon}
                    icon={<MagicIcon h="100%" w="100%" />}
                  />
                </Box>
              ))}
            </Flex>
          </Container>
        </Box>
        <Box bgColor="gray.100">
          <Container>
            <Flex flexDir="column" alignItems="center" py="8rem">
              <Text color={pink500} fontWeight="600">
                Get A test
              </Text>
              <Heading
                mt="1rem"
                color={"gray.600"}
                textTransform="capitalize"
                fontWeight="600"
              >
                Try A Lesson
              </Heading>
              <Text my="2rem" color="gray.500" width="50%" textAlign="center">
                Drop your email below and we will send you one Video lesson for
                free, so you get a test of the lesson
              </Text>
              <Flex width="40%" gap="1rem">
                <Input type="text" width="60%" placeholder="Enter Email" />
                <Button bgColor="#0f0f0f" color="white" p=".5rem 1rem">
                  Send Preview
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box bgColor="white" mb="4rem">
          <Container>
            <Flex flexDir="column" alignItems="center" py="4rem">
              <Text
                textTransform="capitalize"
                color={puple500}
                fontWeight="700"
              >
                Unlock Your full potential
              </Text>
              <Heading
                my="2rem"
                w="60%"
                fontFamily="montserrat"
                textAlign="center"
              >
                Became the Worldclass designer you are meant to be
              </Heading>
              <Button bgColor="black" color="white">
                Became a member
              </Button>

              <Flex gap={"2rem"} width="100%" flexWrap={"wrap"} justifyContent="center">
  {imageGallery.slice(0,10).map((item, i) => (
    <Box
      h="20rem"
      key={i}
      flex="0 0 17.895%"
      rounded="lg"
      overflow="hidden"
      marginTop={handleMargin(i)}
      marginBottom={imageBottom[i % imageBottom.length]}
    >
      <Image
        src={item}
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  ))}
</Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

const Cardheading = [
  "visual design", "web Design", "product Design", "Brand Design", "career and freelance"
]
const cardName = [
  "apple", "microsoft","google","netflix","twitter","facebbok"
]
const imageIcon = [
  "/woman.webp","/woman2.webp"
]
const imageGallery = [
  "/woman.webp","/woman2.webp","imgs/woman7.webp","imgs/man.webp","imgs/man1.webp","imgs/woman.png","imgs/woman1.webp","imgs/woman5.webp","imgs/woman3.webp","imgs/woman4.webp","imgs/woman6.webp","imgs/woman7.webp"
]
const imageTops = [
  "1rem", "4rem", "6rem", "4rem", "1rem"
]
const imageBottom = [
  "-1rem", "-4rem", "-6rem", "-4rem", "-1rem"
]
export default Home;
