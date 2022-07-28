import React, { useState } from "react";
import {
  Image,
  Box,
  Flex,
  Link,
  Icon,
  Text,
Menu, MenuItem
} from "@chakra-ui/react";


import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./images/logo.svg";
import heroImage from "./images/desktop/image-hero.jpg";
import mobile_heroImage from "./images/mobile/image-hero.jpg";


function Navbar() {
 
  const [display, changeDisplay] = useState("none");
  
  

  return (
    <>
      <Flex 
     
        flexDir='column'
        justifyContent='space-between'
        bgImage={[
          `url(${mobile_heroImage})`,
          `url(${mobile_heroImage})`,
          `url(${mobile_heroImage})`,
          `url(${heroImage})`,
        ]}
        bgRepeat='no-repeat'
        h={["100vh", "100vh", "100vh", "75vh", "75vh"]}
        backgroundSize="cover"
      >
        <Flex
            flexDir='row'
            justifyContent='space-between'>
          
            <Image src={logo} to='/' m='15px' h='auto' w={['50%','30%','auto','auto','auto']}/>
          
          {/* Desktop */}
          <Flex align='center'>
            <Flex display={["none", "none", "none", "flex"]} color='white' m='15px'>
             
                
                  <Link
                  to='#'
                  fontFamily='sans-serif'
                  fontStyle='OpenSans'
                  m='8px'
                  w='100%'
                >
                    About
                  </Link>
                
              

              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Careers
              </Link>
              
              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Events
              </Link>
              
              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Support
              </Link>
              
              
              <Link
                to='/products'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Products
              </Link>
              
            </Flex>

            {/* Mobile */}

            <Icon
              aria-label='Open Menu'
              size='lg'
              mr={2}
              as={AiOutlineMenu}
              onClick={() => changeDisplay("flex")}
              display={["flex", "flex", "flex", "none"]}
              color='white'
              fontSize={["20px", "25px", "25px"]}
            />
           
          </Flex>

          {/* Mobile Content */}
          <Flex
            w='100vw'
            display={display}
            bgColor='gray.100'
            opacity='85%'
            zIndex={20}
            h='100vh'
            pos='fixed'
            top='0'
            left='0'
            overflowY='auto'
            flexDir='column'
          >
            <Flex justify='flex-end'>
              <Icon
                mt={2}
                mr={2}
                aria-label='Open Menu'
                fontSize='25px'
                as={AiOutlineClose}
                onClick={() => changeDisplay("none")}
              />
            </Flex>

            <Flex flexDir='column' align='center' m='20px'>
              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                About
              </Link>

              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Careers
              </Link>

              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Events
              </Link>
              <Link
                to='#'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Support
              </Link>
              <Link as={Link}
                to='/products'
                fontFamily='sans-serif'
                fontStyle='OpenSans'
                m='8px'
                w='100%'
              >
                Products
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Box justifyContent={['center','center','left']}>
          <Text
            color='white'
            m='40px' 
            border='3px white solid' 
            fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
            h={["25vh", "30vh", "35vh", "35vh", "35vh"]}
            w={["85vw", "65vw", "55vw", "45vw", "35vw"]}
            fontWeight='thin'
            p='10px'
            position='static'
            alignContent={["center", "center", "center", "left", "left"]}
          >
            IMMERSIVE EXPERIENCES THAT DELIVER
          </Text>
        </Box>
      </Flex>
    </>
  );
}
export default Navbar;
