import React from "react";
import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import logo from "./images/logo.svg";

function footer() {
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      justifyContent='space-between'
      bgColor='black'
      color='white'
      p='50px 10px 10px 10px'
      maxWidth='1440px'
      align='center'
    >
      <Flex flexDir='column' justifyContent='space-between' m='5px'>
        <Image
          src={logo}
          h='auto'
          w={["180px", "180px", "120px"]}
          m={["25px 5px", "25px 5px", "5px"]}
          textAlign={"center"}
        />
        <Flex
          fontSize={["20px", "18px", "12px"]}
          flexDir={["column", "column", "row"]}
          textAlign='center'
        >
          <Link to='#' m={["10px", "10px", "5px"]}>
            About
          </Link>
          <Link to='#' m={["10px", "10px", "5px"]}>
            Careers
          </Link>
          <Link to='#' m={["10px", "10px", "5px"]}>
            Events
          </Link>
          <Link to='#' m={["10px", "10px", "5px"]}>
            Products
          </Link>
          <Link to='#' m={["10px", "10px", "5px"]}>
            Support
          </Link>
        </Flex>
      </Flex>
      <Flex
        flexDir='column'
        justifyContent='space-between'
        m='5px'
        align={"center"}
      >
        <Flex>
          <Icon
            as={FaFacebookSquare}
            h='auto'
            w={["25px", "25px", "20px"]}
            m='5px'
          />
          <Icon
            as={AiOutlineTwitter}
            h='auto'
            w={["25px", "25px", "20px"]}
            m='5px'
          />
          <Icon
            as={FaPinterest}
            h='auto'
            w={["25px", "25px", "20px"]}
            m='5px'
          />
          <Icon
            as={AiOutlineInstagram}
            h='auto'
            w={["25px", "25px", "20px"]}
            m='5px'
          />
        </Flex>

        <Text fontSize={['15px','18px','10px']} m={['10px','10px','5px']} color='gray' align={"center"}>
          <Icon as={AiOutlineCopyright} />
          &nbsp;2021 Loopstudios. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
}

export default footer;
