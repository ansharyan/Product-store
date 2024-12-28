import { Button, Container, Flex,HStack,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"100vw"} px={10} >
      <Flex 
        h={16} 
        alignItems={"center"} 
        justifyContent={'space-between'}
        flexDir={{
          base: "column",
          sm:"row"
        }}
       >
      <Text
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
          <Button>
            <FaCartPlus fontSize={25} color='rgb(138, 96, 180)'/>
          </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <CiDark fontSize={25}/> : <MdDarkMode fontSize={25} />}
        </Button>
      </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar