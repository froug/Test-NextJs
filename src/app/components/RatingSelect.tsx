import { VStack, Text, Select } from "@chakra-ui/react";
import React, { FC } from "react";

interface RatingSelectProps {
  minRating: string;
  onRatingChange: (value: string) => void;
}

export const RatingSelect: FC<RatingSelectProps> = ({
  minRating,
  onRatingChange,
}) => {
  return (
    <VStack
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg="gray.300"
      width="300px"
      spacing={2}
    >
      <Text fontWeight="medium">Filter par note</Text>
      <Select
        placeholder="Sélectionner une note"
        value={minRating}
        onChange={(e) => onRatingChange(e.target.value)}
        bg="white"
      >
        <option value="">Tous</option>
        {[0, 1, 2, 3, 4, 5].map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </Select>
    </VStack>
  );
};
