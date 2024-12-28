import { Box, Button, Container, Flex, Heading, Input, Text, useColorModeValue, useToast, VStack,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product.js';

export const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const {createProduct} = useProductStore();

  const handleAddProduct = async() =>{
    const {success, message} = await createProduct(newProduct);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      })
    }else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      });
      setNewProduct({name:"", price:"", image:""});
    }
  }

  return (
    <Container maxW={"70vw"} marginTop={"2rem"}>
      <VStack spacing={8}>
        <Heading as={'h1'} mb={4}>
          Create New Product
        </Heading>
        <Box w={'full'} bg={useColorModeValue("gray.600", "gray.800")}
        p={8} rounded={"lg"} shadow={"md"}
        >
          
          <VStack spacing={4}>
            <Image src={newProduct.image} alt={newProduct.name} maxH={"20rem"}/>
            <Input
            placeholder='New Product'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            /> 
            <Input
            placeholder='Price'
            name='price'
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            /> 
            <Input
            placeholder='Image URL'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            /> 
            <Button w={"full"} colorScheme='blue' onClick={handleAddProduct} >Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
