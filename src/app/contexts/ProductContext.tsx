"use client";

import { createContext, useContext } from "react";
import { ProductContextType } from "./product.types";

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts doit être utilisé dans un ProductProvider");
  }
  return context;
};
