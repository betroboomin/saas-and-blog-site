import { Box, Image } from "@chakra-ui/react";
import React from "react";

// type Props = {}

const Profilepicture = () => {
  return (
    <Box
      zIndex={90}
      mt="-75px"
      height="150px"
      width="150px"
      rounded="full"
      overflow="hidden"
      border="4px"
      borderColor="white"
    >
      <Image
        h="100%"
        width="100%"
        src="/imgs/woman3.webp"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  );
};

export default Profilepicture;
