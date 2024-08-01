import Banner from "./components/home/Banner";
import Category from "./components/home/Category";
import Products from "./components/home/Products";
import ProductCard from "./components/home/ProductCard";

export default function Home() {
  return (
    <div>
      <Category/>
      <Banner/>
      <Products/>
      <ProductCard/>
    </div>
  );
}
