import React, { useState } from "react";
import {
  Image,
  Button,
  Box,
  Flex,
  Link,
  Icon,
  Text,
  Spacer,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./images/logo.svg";
import heroImage from "./images/desktop/image-hero.jpg";
import mobile_heroImage from "./images/mobile/image-hero.jpg";

function Navbar() {
  let navigate = useNavigate();
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
          
            <Image src={logo} m='15px' h='auto' w={['50%','30%','auto','auto','auto']}/>
          
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
                to='#'
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
              <Link
                to='#'
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

        <Flex>
          <Text
            color='white'
            p='10px'
            border='3px white solid'
            fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
            h={["25vh", "30vh", "35vh", "35vh", "35vh"]}
            w={["85vw", "65vw", "55vw", "45vw", "35vw"]}
            fontWeight='thin'
            left={["1rem", "3rem", "10rem", "10rem", "10rem"]}
            bottom={["17rem", "15rem", "15rem", "7rem", "7rem"]}
            position='relative'
            alignContent={["center", "center", "center", "left", "left"]}
          >
            IMMERSIVE EXPERIENCES THAT DELIVER
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
export default Navbar;
