import { TCategorie, TProduct } from "../../types";
import ProductCard from "./ProductCard/ProductCard";

type TPrpos = {
  products: TProduct[];
  openEditModal?: () => void;
  setProductEdit: (product: TProduct) => void;
  setColorSelected?: (colors: string[]) => void;
  setProductEditIndex: (val: number) => void,
  setSelected: (val: TCategorie) => void
};

function ProductCards({ products ,setProductEdit, openEditModal, setColorSelected, setProductEditIndex, setSelected }: TPrpos) {
  const renderProduct = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      openEditModal={openEditModal}
      setProductEdit={setProductEdit}
      setColorSelected={setColorSelected}
      productIndex={index}
      setProductEditIndex={setProductEditIndex}
      setSelected={setSelected}  
    />
    
  ));
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 space-y-8">
      {renderProduct}
    </div>
  );
}

export default ProductCards;
