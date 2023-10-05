// Libraries
import { Row } from "antd";

// Types
import { Product } from "@/types/product.type";

// Components
import CardItem from "@/_components/molecules/Card";

interface ListProductProps {
  products: Product[];
}

export default async function ListProduct({ products }: ListProductProps) {
  return (
    <Row justify="center" gutter={[48, 24]} wrap={true}>
      {products?.map((product: Product, index: number) => (
        <CardItem
          key={product.id}
          title={product.title}
          brand={product.brand}
          description={product.description}
          price={product.price}
          id={product.id}
          rating={product.rating}
          thumbnail={product.thumbnail}
          images={product.images}
        />
      ))}
    </Row>
  );
}
