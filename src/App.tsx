import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ProductCards from "./components/ProductCards/ProductCards";
import { colors, data, inputData } from "./data/data";
import Button from "./components/ui/Button/Button";
import Modal from "./components/ui/Modal/Modal";
import Input from "./components/ui/Input/Input";
import { TProduct } from "./types";
import validationProduct from "./validation/productValidation";
import Error from "./components/ui/Error/Error";
import Colors from "./components/Colors/Colors";
const defaultProduct = {
  title: "",
  description: "",
  imageUrl: "",
  color: [],
  price: "",
  category: {
    name: "",
    imageUrl: "",
  },
};
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setproduct] = useState<TProduct>(defaultProduct);
  const [error, setError] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setproduct({
      ...product,
      [name]: value,
    });
   setError({
    ...error,
    [name] : ""
   })
  };

  const handelCancel = () => {
    setproduct(defaultProduct);
    setError({ title: "", description: "", imageUrl: "", price: "" });
    closeModal();
  };

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validationProduct({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
    });
    // ["", "", ""]
    const hasError =
      Object.values(errors).some((error) => error === "") &&
      Object.values(errors).every((error) => error === ""); // true
    // false => true | true => false;
    console.log(Object.values(errors));
    if (!hasError) {
      setError(errors);
      return;
    }
    console.log("send the data");
  };

  const renderInpts = inputData.map((input) => (
    <div className="flex flex-col space-y-1 mb-8">
      <label
        htmlFor={input.id}
        className="mb-[1px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input
        key={input.id}
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={handleInput}
      />
      <Error message={error[input.name]} />
    </div>
  ));

  
  return (
    <main className="container py-3">
      <Button
        className="bg-purple-500"
        width="w-fit"
        onClick={() => {
          openModal();
        }}>
        ADD PRODUCT
      </Button>
      <ProductCards products={data} />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new product">
        <form action="" onSubmit={handelFormSubmit}>
          {renderInpts}
          <Colors colors={colors}/>
          <div className="flex space-x-2 items-center">
            <Button className="bg-purple-700">Submit</Button>
            <Button
              className="bg-gray-400"
              onClick={handelCancel}
              type="button">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
