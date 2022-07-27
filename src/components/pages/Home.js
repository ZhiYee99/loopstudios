import React from "react";
import { Image, Box, Text, Button, Link, Flex, Icon } from "@chakra-ui/react";
import introImg from "../images/desktop/image-interactive.jpg";


function Home() {
  return (
    <Box>
      <Image scr={introImg} />
      <Box>
        <Text>THE LEADER IN INTERACTIVE VR</Text>
        <Text>
          Founded in 2011, Loopstation has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have trsnsformed business through digital
          experiences that bind to their brand.
        </Text>
      </Box>
     
      <Box>
        <Flex>
          <Image />
          <Flex>
            <Link to='#'>About</Link>
            <Link to='#'>Careers</Link>
            <Link to='#'>Events</Link>
            <Link to='#'>Products</Link>
            <Link to='#'>Support</Link>
          </Flex>
        </Flex>
        <Flex>
          <Icon></Icon>
          <Icon></Icon>
          <Icon></Icon>
          <Icon></Icon>
          <Text>
            <Icon />
            Loopstudios. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
