import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Divider, Button, ButtonGroup, Image, Text, useToast, Container, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, ModalFooter, useDisclosure, Box, Flex } from '@chakra-ui/react';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';

function ProductCard({product}) {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const {deleteProduct, updateProduct } =  useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleDeleteProduct = async(pid) => {
        const {success, message} = await deleteProduct(pid);
        
        if(success){
            toast({
                title: "Deleted",
                description: message,
                status: "success",
                isClosable: true
            })
        }else{
            toast({
                title: "error",
                description: message,
                status: "error",
                isClosable: true
            })
        }
    }
    
    const handleUpdateProduct = async(pid, updatedProduct) =>{
        const {success, message} = await updateProduct(pid, updatedProduct);

        if(success){
            toast({
                title: "Updated",
                description: message,
                status: "success",
                isClosable: true
            })
            onClose();
        }else{
            toast({
                title: "error",
                description: message,
                status: "error",
                isClosable: true
            })
        }
    }

  return (
    <Container _hover={{ transform: "translateY(-5px)", shadow: "xl" }} >
    <Card maxW="sm" h={"45rem"}>
      <CardBody>
        <Flex justifyContent={"center"} >
        <Image src={product.image} alt={product.name} maxH={"25rem"} />
        </Flex>
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
            
          <Button variant="solid" colorScheme="blue" onClick={onOpen}>
            Edit
          </Button>
          
          <Button variant="ghost" colorScheme="blue" onClick={() => handleDeleteProduct(product._id)}>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <Image src={updatedProduct.image} alt={product.name} maxH={"25vh"}/>
              <Input placeholder="Product Name" value={updatedProduct.name} name='name' onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})} />
              <Input placeholder="Product Price" value={updatedProduct.price} name='price' type='number' onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
              <Input placeholder="Product Image" value={updatedProduct.image} name='image' onChange={(e) => setUpdatedProduct({...updatedProduct, image:e.target.value})} />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
    </Modal>
    </Container>

    
  );
}

export default ProductCard;
