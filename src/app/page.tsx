import { Box } from "@chakra-ui/react";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Box className="min-h-screen" p={8}>
      <Header />
      <ProductList />
      <Footer />
    </Box>
  );
}
