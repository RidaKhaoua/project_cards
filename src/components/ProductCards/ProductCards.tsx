import React from "react";
import { TCategorie, TProduct } from "../../types";
import ProductCard from "./ProductCard/ProductCard";

type TPrpos = {
  products: TProduct[];
  openEditModal?: () => void;
  setProductEdit: (product: TProduct) => void;
  setProductEditIndex: (val: number) => void;
  setSelected: (val: TCategorie) => void;
  openRemoveModal: () => void;
};

const  ProductCards =React.memo(({
  products,
  setProductEdit,
  openEditModal,
  openRemoveModal,
  setProductEditIndex,
  setSelected,
}: TPrpos) => {
  const renderProduct = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      openEditModal={openEditModal}
      setProductEdit={setProductEdit}
      productIndex={index}
      setProductEditIndex={setProductEditIndex}
      setSelected={setSelected}
      openRemoveModal={openRemoveModal}
      
    />
  ));
  return (
    <div className="p-2 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-2">
      {renderProduct}
    </div>
  );
})

export default ProductCards;
