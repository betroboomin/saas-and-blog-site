import React,{useState} from "react";
import ShopLayout from "../Layouts/shop-layout";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  // CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { MarketCategory, categoryArray } from "../Components/market-category";
import UserIcon from "../assets/Icons/user-icon";
// import { wrap } from "framer-motion";



// type Props = {}

const MarketHome = () => {


  const [isLiked, setIsLiked] = useState(false);

  return (
    <ShopLayout>
      <Box mt={"4.8rem"} pl="7rem" pr="2rem" pt=".8rem" width="100%">
        <MarketCategory />
        <Box bgColor="gray.50">
          <Flex mt="1rem" overflowX="auto" gap="2rem">
           
          <Box  rounded="xl" overflow="hidden" width="200px" height="120px" position="relative" shadow={"lg"}>
              <Image src="/spotlight.jpg" width="100%" height="100%" objectFit={"cover"}/>
              <Box height="100%" width="100%" left={0} top={0} position="absolute" bg={`linear-gradient(to top, white, transparent)`}>
<Box padding=".3rem 1rem" bgColor="pink.700" color="white" fontWeight="700" width="fit-content" rounded="xl" position={"absolute"} bottom=".5rem" left=".5rem">
  1200
</Box>
              </Box>
            </Box>
            <Box  rounded="xl" overflow="hidden" width="200px" height="120px" position="relative" shadow={"lg"}>
              <Image src="/spotlight.jpg" width="100%" height="100%" objectFit={"cover"}/>
              <Box height="100%" width="100%" left={0} top={0} position="absolute" bg={`linear-gradient(to top, white, transparent)`}>
<Box padding=".3rem 1rem" bgColor="pink.700" color="white" fontWeight="700" width="fit-content" rounded="xl" position={"absolute"} bottom=".5rem" left=".5rem">
  1200
</Box>
              </Box>
            </Box>
            
          </Flex>
          <Flex mt="1rem" boxSizing="border-box" gap="5rem" flexWrap={"wrap"}>
            {
              categoryArray.map((item)=>(
                <Card overflow="hidden" key={item.name} py={"1rem"} px="1rem" width="300px" padding={0}>
                {/* <Heading>
  New Item
    </Heading> */}
                <CardBody p={0} position="relative">
                  <Box onClick={()=>setIsLiked(!isLiked)} right="1rem" bottom=".7rem" h="1.7rem" w="1.7rem" position="absolute" fill={isLiked ? 'pink.900' : 'white'} rounded="full" cursor="pointer" bgColor={isLiked ? 'white' : 'transparent'}>
                    <UserIcon w="100%" h="100%" />
                  </Box>
                  <Image src={item.image ? item.image : "mallchrismass.jpg"} />
                </CardBody>
                <CardFooter flexDir="column">
                  <Heading fontSize="1.5rem">Chrismas Mall</Heading>
                  <Flex justifyContent="space-between" mt=".6rem">
                    <Flex gap=".8rem">
                      <Box
                        color={"white"}
                        bgColor="pink.700"
                        p=".4rem 1rem"
                        rounded="lg"
                      >
                        i
                      </Box>
                      <Text py=".4rem" color="gray.500">Limited Edition</Text>
                    </Flex>
                    <Text py=".4rem" color="pink.700" fontSize="1rem" px=".5rem" shadow={"lg"}>
                      $500
                    </Text>
                  </Flex>
                  <Flex mt={"1rem"} alignItems="center" gap={"1rem"} >
                    <Text color="pink.700" >
                      Booked users
                    </Text>
                    <Flex>
                      <Box fill="white" bgColor="pink.900" width="2rem" height="2rem" rounded="full" >
                      <UserIcon width="100%" height="100%" />
                      </Box>
                      <Box transform="translateX(-.5rem)" fill="white" bgColor="pink.900" width="2rem" height="2rem" rounded="full" >
                      <UserIcon width="100%" height="100%" />
                      </Box>
                    </Flex>
  
                  </Flex>
                  <Flex gap="1rem" mt="1rem">
                    <Button fontSize=".8rem" fontWeight={700} bgColor="pink.900" color="white">
                      Place an order
                    </Button>
                    <Button fontSize=".8rem" fontWeight={700} bgColor="white" shadow="lg">
                      Add to cart
                    </Button>
                  </Flex>
                </CardFooter>
              </Card>
              ))
            }
           
          </Flex>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default MarketHome;
