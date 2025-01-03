import React, { useEffect } from "react";
import {  Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard.jsx";
import { Link } from 'react-router-dom'
import { useProductStore } from "../store/product.js";


const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);  

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base:1,md:2, lg:3
          }}
          spacing={10}
          width={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length ===0 && (<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>)}
        

      </VStack>
    </Container>
  );
};

export default HomePage;
