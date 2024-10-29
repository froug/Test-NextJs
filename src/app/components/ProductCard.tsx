"use client";

import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Product } from "../contexts/product.types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log("product", JSON.stringify(product));
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      mx="auto"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image
        src={product.images[0] || "https://via.placeholder.com/300"}
        alt={product.title}
        height="230px"
        width="100%"
        objectFit="contain"
        borderTopRadius="lg"
      />
      <Stack p={4} spacing={2}>
        <Heading size="md" noOfLines={2}>
          {product.title}
        </Heading>

        <HStack spacing={2}>
          <HStack spacing={1}>
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                as={FaStar}
                color={i < (product.rating || 0) ? "yellow.400" : "gray.200"}
              />
            ))}
          </HStack>
          <Text fontSize="sm" color="gray.500">
            ({product.rating})
          </Text>
        </HStack>

        <Text fontSize="xl" fontWeight="bold" color="teal.600">
          {product.price}€
        </Text>

        <Text color="gray.600" noOfLines={2}>
          {product.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default ProductCard;
