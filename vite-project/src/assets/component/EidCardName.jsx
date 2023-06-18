import React,{ useState,useEffect,useParams  } from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import Photo1 from "./Photo1.png"

export default function EidCardName(props){


  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={150}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h="full"
          fit="cover"
          src={Photo1}
          alt="avatar"
          p={5}
          _dark={{ bg: "white", border: " thick double #894505" }}
          
        />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            عيد سعيد 
          </Link>
          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            كل عام وانتم بخير 
            { props.name } من

          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
}

