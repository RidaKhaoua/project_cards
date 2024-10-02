import { TCategorie, TProduct } from "../../../types";
import Button from "../../ui/Button/Button";
import Image from "../../ui/Image/Image";
import { numberWithComas, removeTextAndReplaceItWithThreeDots } from "../../../utils/functions";
import Circle from "../../ui/Circle/Circle";

interface TPrpos {
  product: TProduct;
  openEditModal?: () => void;
  setProductEdit?: (product: TProduct) => void;
  productIndex: number;
  setProductEditIndex: (val: number) => void;
  setSelected: (val: TCategorie) => void;
  openRemoveModal: () => void
}

function ProductCard({
  product,
  productIndex,
  setProductEditIndex,
  openEditModal,
  setProductEdit,
  openRemoveModal,
}: TPrpos) {
  const handleEdit = () => {
    if (openEditModal) {
      openEditModal();
      setProductEdit?.({
        ...product,
      });

      setProductEditIndex(productIndex);
    }
  };

  const handleRemoveIndex = () => {
    openRemoveModal();
    // setProductRemoveIndex(productIndex);
    setProductEdit?.(product)
  }

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded p-4">
      <Image
        imgUlr={product.imageUrl}
        alt={product.title}
        className=" w-full h-1/2 rounded object-cover"
      />
      <h4 className="my-2 text-black-500 font-bold">{product.title}</h4>
      <p className="text-xs mb-4 text-gray-400  break-words">
        {removeTextAndReplaceItWithThreeDots(product.description, 120)}
      </p>
      <div className="flex space-x-2 items-center my-2">
        {product.color.length > 0
          ? product.color.map((item) => <Circle color={item} key={item} />)
          : "There are no Color"}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-purple-500 font-bold">
          ${numberWithComas(product.price)}
        </p>

         <div className="flex items-center gap-2">
          <p>{product.category.name}</p>
         <Image
          imgUlr={product.category.imageUrl}
          alt={product.category.name}
          className="w-8 h-8 rounded-full object-fill"
        />
        </div> 
        
      </div>
      <div className="flex space-x-2 justify-between items-center mt-2">
        <Button className="bg-indigo-600 font-semibold hover:bg-indigo-500 duration-200" onClick={handleEdit}>
          Edit
        </Button>
        <Button className="bg-red-700 font-semibold hover:bg-red-500 duration-200" onClick={handleRemoveIndex}>
          Remove
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
