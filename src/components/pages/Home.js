import React from "react";
import { Image, Box, Text, Button, Link, Flex, Icon } from "@chakra-ui/react";
import introImg from "../images/desktop/image-interactive.jpg";
import Swiper from "../Swiper";

function Home() {
  return (
    <>
    <Flex flexDir={['column','column','row']} justifyContent='space-between' m={['50px','50px','100px']}>
      <Image src={introImg} h='auto' w={['100%','100%','50%']}/>
      <Flex flexDir='column' h='auto' w={['70vw','70vw','30vw']} textAlign='center' m='auto'>
        <Text fontSize={['2xl','3xl','4xl']} m='10px'>THE LEADER IN INTERACTIVE VR</Text>
        <Text fontSize={['12px','14PX','16PX']} m='10px' color='gray'>
          Founded in 2011, Loopstation has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed business through digital
          experiences that bind to their brand.
        </Text> 
      </Flex>
      
    </Flex>
      
      <Box><Swiper/></Box>
    </>

  );
}

export default Home;
