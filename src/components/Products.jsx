import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
  const productList = useSelector((state) => state.products);

  return (
    <div className="products-wrapper">
      {productList.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}