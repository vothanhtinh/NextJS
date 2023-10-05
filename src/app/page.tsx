import ListProduct from "@/_components/molecules/ListProduct";
import { Product } from "@/types/product.type";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products?limit=8&skip=10");
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col md:flex-row justify-between mx-auto mt-8 ">
        <ListProduct products={products} />
      </div>
    </div>
  );
}
