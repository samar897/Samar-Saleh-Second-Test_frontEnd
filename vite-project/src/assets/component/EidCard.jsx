
import { Box, Flex, Image,  border, chakra,Button } from "@chakra-ui/react";
import Photo1 from "./Photo1.png"
import {Link, Route,Routes,useNavigate} from "react-router-dom"
import React,{ useState,useEffect  } from "react";


           

import axios from 'axios';

export default function EidCard(){

    
  const [name, setName] = useState("");



  const url = "https://64874e11beba629727906d25.mockapi.io/api/Login"
 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(url).then(res => {
      setName(res.data);
      navigate(`/EidCardName/${name}`);
    });
  };
  
  
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
            padding={2}
          >
          <b>
                عيد سعيد </b>
          </Link>
          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{ color: "gray.200" }}
            padding={2}
          >
          <b>
             كل عام وانتم بخير </b>

           <h4>اكتب اسمك</h4>
           <input
             type="text"
             placeholder="Enter your name" 
             onChange={(e) => setName(e.target.value)}
             border= "1px solid #894505"
           />
           <br/> <br/>
           <Button
           border= "1px solid #894505"
           color= "#894505"
           _dark={{ color: "white" , bg: "#894505"}}
          onClick={handleSubmit}
           >
             Send Name
           </Button>
          </chakra.span>
        </Box>
      </Box>
      
    </Flex>
  );
}

