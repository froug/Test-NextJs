import { Product } from "../app/contexts/product.types";

class RatingFilter {
  private products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  filterByRating(minRating: number): Product[] | null {
    const minProductRating = Math.min(
      ...this.products.map((product) => product.rating)
    );
    console.log("minProductRating", minProductRating);
    if (minRating < minProductRating) {
      return null;
    }

    const filteredProducts = this.products.filter(
      (product) => product.rating >= minRating
    );
    console.log("minProductRating", filteredProducts);
    return filteredProducts;
  }
}

export default RatingFilter;
