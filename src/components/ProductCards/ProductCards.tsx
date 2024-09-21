import { TProduct } from "../../types";
import ProductCard from "./ProductCard/ProductCard";

type TPrpos = {
  products: TProduct[]
};

function ProductCards({products}: TPrpos) {
  const renderProduct = products.map(product => <ProductCard key={product.id} product={product}/>);
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {renderProduct}
    </div>
  );
}

export default ProductCards;
