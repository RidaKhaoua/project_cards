import { TProduct } from "../../../types";
import Button from "../../ui/Button/Button";
import Image from "../../ui/Image/Image";
import {removeTextAndReplaceItWithThreeDots} from "../../../utils/functions"
type TPrpos = {
  product: TProduct
};

function ProductCard({product}: TPrpos) {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded p-4">
      <Image
        imgUlr={product.imageUrl}
        alt={product.title}
        className=" w-full h-1/2 rounded object-cover"
      />
      <h4 className="my-2 text-black-500 font-bold">{product.title}</h4>
      <p className="text-xs mb-4 text-gray-400">
        {removeTextAndReplaceItWithThreeDots(product.description, 120)}
      </p>
      <div className="flex space-x-2 items-center my-2">
        <span className="w-5 h-5 bg-purple-700 rounded-full cursor-pointer hover:scale-125 ease-in-out duration-300"></span>
        <span className="w-5 h-5 bg-orange-600 rounded-full cursor-pointer hover:scale-125 ease-in-out duration-300"></span>
        <span className="w-5 h-5 bg-green-700 rounded-full cursor-pointer hover:scale-125 ease-in-out duration-300"></span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-purple-500 font-bold">${product.price.toFixed(2)}</p>

        <Image
          imgUlr={product.category.imageUrl}
          alt={product.category.name}
          className="w-8 h-8 rounded-full object-center"
        />
      </div>
      <div className="flex space-x-2 justify-between items-center mt-2">
        <Button className="bg-indigo-600" onClick={() => alert("edit")}>Edit</Button>
        <Button className="bg-red-600" onClick={() => alert(new Date())}>Remove</Button>
      </div>
    </div>
  );
}

export default ProductCard;
