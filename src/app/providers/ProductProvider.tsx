import { ReactNode } from "react";
import { Product, ProductContextType } from "../contexts/product.types";
import { ProductContext } from "../contexts/ProductContext";
import { mapApiProduct } from "@/utils/productMapper";
import { useQuery } from "@tanstack/react-query";

interface ProductProviderProps {
  children: ReactNode;
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des produits");
  }
  const data: ApiResponse = await response.json();
  return data.products.map(mapApiProduct);
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const {
    data: products = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleFetchProducts = async (): Promise<void> => {
    await refetch();
  };

  const value: ProductContextType = {
    products,
    loading: isLoading,
    error: error
      ? error instanceof Error
        ? error.message
        : "Une erreur est survenue"
      : null,
    fetchProducts: handleFetchProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
