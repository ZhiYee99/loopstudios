import React from "react";
import { Image, Box, Text, Button, Link, Flex, Icon } from "@chakra-ui/react";
// import introImg from "../images/desktop/image-interactive.jpg";
import Swiper from "../Swiper";

function Home() {
  return (
    <>
    <Flex flexDir='row' justifyContent='space-between'>
      <Image scr={'introImg'} mt='500px'/>
      <Flex flexDir='column' h='auto' w={['50vw','60vw','30vw']} textAlign='center' m='auto'>
        <Text fontSize={['xl','2xl','4xl']} m='10px'>THE LEADER IN INTERACTIVE VR</Text>
        <Text fontSize='12px' m='10px' color='gray'>
          Founded in 2011, Loopstation has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have trsnsformed business through digital
          experiences that bind to their brand.
        </Text>
      </Flex>
      
      </Flex>
      <Box><Swiper/></Box>
    </>

  );
}

export default Home;
