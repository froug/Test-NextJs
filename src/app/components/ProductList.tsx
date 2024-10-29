"use client";

import { FC, useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import {
  VStack,
  Text,
  Button,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spinner,
  Center,
  HStack,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import RatingFilter from "@/utils/RatingFilter";
import { RatingSelect } from "./RatingSelect";

export const ProductList: FC = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [minRating, setMinRating] = useState<string>("");

  const ratingFilter = new RatingFilter(products);
  const filteredProducts =
    minRating === ""
      ? products
      : ratingFilter.filterByRating(Number(minRating));

  console.log(error);
  useEffect(() => {
    if (error) {
      onOpen();
    }
  }, [error, onOpen]);

  if (loading)
    return (
      <Center h="200px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );

  return (
    <VStack spacing={6} align="stretch" w="full">
      <HStack justify="flex-start" w="full">
        <RatingSelect minRating={minRating} onRatingChange={setMinRating} />
      </HStack>

      <Text fontSize="sm" color="gray.600">
        {filteredProducts
          ? `${filteredProducts.length} produit(s) trouvé(s)`
          : "Aucun produit trouvé pour le filtre actuel"}
      </Text>

      {filteredProducts && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Erreur</ModalHeader>
          <ModalBody>
            <Text color="red.500">{error}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fermer
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                fetchProducts();
                onClose();
              }}
            >
              Réessayer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
