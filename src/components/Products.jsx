import { useSelector } from "react-redux";
import Product from "./Product";

export function MenProducts() {
  const list = useSelector((state) => state.productData.menProducts);

  return (
    <div className="products-wrapper">
      {list.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

export function WomenProducts() {
  const list = useSelector((state) => state.productData.womenProducts);

  return (
    <div className="products-wrapper">
      {list.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

export function KidsProducts() {
  const list = useSelector((state) => state.productData.kidsProducts);

  return (
    <div className="products-wrapper">
      {list.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}
