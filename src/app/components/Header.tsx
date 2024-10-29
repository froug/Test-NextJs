"use client";
import React from 'react';
import { Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex direction="column" align="center" justify="center" mb={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Our Product Showcase
      </Heading>
      <Text fontSize="lg" color="gray.600" textAlign="center">
        Discover amazing products that will enhance your life.
      </Text>
    </Flex>
  );
}