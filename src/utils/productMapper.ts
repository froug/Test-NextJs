import { Product } from "@/app/contexts/product.types";

interface ApiProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

export const mapApiProduct = (apiProduct: ApiProduct): Product => {
  return {
    id: apiProduct.id,
    title: apiProduct.title,
    description: apiProduct.description,
    price: apiProduct.price,
    rating: apiProduct.rating,
    images: apiProduct.images
  };
}; 