import { v4 as uuid } from "uuid";
import { TProduct, TProductsNames } from "./types";
import { colors, data, inputData, categories } from "./data/data";
import { ChangeEvent, FormEvent, useState } from "react";
import validationProduct from "./validation/productValidation";
import ProductCards from "./components/ProductCards/ProductCards";
import Button from "./components/ui/Button/Button";
import Modal from "./components/ui/Modal/Modal";
import Input from "./components/ui/Input/Input";
import Error from "./components/ui/Error/Error";
import Colors from "./components/Colors/Colors";
import Select from "./components/ui/Select/Select";

import "./App.css";

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
  const [selected, setSelected] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productEditIndex, setIsProductEditIndex] = useState(0);
  const [productEdit, setProductEdit] = useState<TProduct>(defaultProduct);
  const [product, setProduct] = useState<TProduct>(defaultProduct);
  const [colorSelected, setColorSelected] = useState<string[]>([]);
  const [products, setProducts] = useState<TProduct[]>(data);
  const [error, setError] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    color: "",
  });

  /* START FUNCTIONS */
  const handleSelectColor = (color: string) => {
    // if (colorSelected.includes(color)) {
    //   return;
    // }
    if (checkIfColorIsSelected(color, colorSelected)) return;
    setColorSelected((prev) => [...prev, color]);
  };

  const handleSelectEditColor = (color: string) => {
    if (checkIfColorIsSelected(color, productEdit.color)) return;

    setProductEdit((prev) => ({
      ...prev,
      color: [...productEdit.color, color],
    }));
  };

  const checkIfColorIsSelected = (
    color: string,
    arraySelectedcolor: string[]
  ): boolean => {
    if (arraySelectedcolor.includes(color)) {
      return true;
    }
    return false;
  };

  const handleRemoveSelectedColor = (color: string) => {
    // color = #00000
    // colorsSelected = ["#98099", "#0000000", "#F00933"];
    const newSelectedColor = colorSelected.filter(
      (colorSelected) => colorSelected !== color
    );
    setColorSelected([...newSelectedColor]);
  };

  const handleRemoveSelectedColorEdit = (color: string) => {
    // color = #00000
    // colorsSelected = ["#98099", "#0000000", "#F00933"];
    const newSelectedColor = productEdit.color.filter(
      (colorSelected) => colorSelected !== color
    );
    setProductEdit((prev) => ({
      ...prev,
      color: newSelectedColor,
    }));
  };

  const closeModal = () => {
    setIsOpen(false);
    setColorSelected([]);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setColorSelected([]);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (isEditModalOpen) {
      setProductEdit({
        ...productEdit,
        [name]: value,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
    setError({
      ...error,
      [name]: "",
    });
  };

  const handelCancel = () => {
    setProduct(defaultProduct);
    setError({
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      color: "",
    });
    setColorSelected([]);
    closeModal();
  };

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validationProduct({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
      color: colorSelected.join(","),
    });
    // ["", "", ""]
    const hasError =
      Object.values(errors).some((error) => error === "") &&
      Object.values(errors).every((error) => error === ""); // true
    // false => true | true => false;

    if (!hasError) {
      setError(errors);
      return;
    }

    setProducts((prev) => [
      {
        id: uuid(),
        ...product,
        color: [...colorSelected],
        category: {
          imageUrl: selected.imageUrl,
          name: selected.name,
        },
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setColorSelected([]);
    closeModal();
  };

  const handelFormEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validationProduct({
      title: productEdit.title,
      description: productEdit.description,
      imageUrl: productEdit.imageUrl,
      price: productEdit.price,
      color: productEdit.color.join(","),
    });
    const hasError =
      Object.values(errors).some((error) => error === "") &&
      Object.values(errors).every((error) => error === "");
    if (!hasError) {
      setError(errors);
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[productEditIndex] = productEdit;
    updatedProducts[productEditIndex].color = [...productEdit.color];
    setProducts([...updatedProducts]);
    closeEditModal();
  };

  /* END FUNCTION */

  // Render
  const renderInpts = inputData.map((input) => (
    <div className="flex flex-col  mb-2 ">
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
        value={isEditModalOpen ? productEdit[input.name] : product[input.name]}
        onChange={handleInput}
      />
      <Error message={error[input.name]} />
    </div>
  ));

  const renderEditInput = (
    id: string,
    label: string,
    type: string,
    name: TProductsNames
  ) => {
    return (
      <div className="flex flex-col  mb-2 ">
        <label
          htmlFor={id}
          className="mb-[1px] text-sm font-medium text-gray-700">
          {label}
        </label>
        <Input
          key={id}
          type={type}
          name={name}
          id={id}
          value={productEdit[name]}
          onChange={handleInput}
        />
        <Error message={error[name]} />
      </div>
    );
  };

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
      <ProductCards
        products={products}
        openEditModal={openEditModal}
        setColorSelected={setColorSelected}
        setProductEdit={setProductEdit}
        setProductEditIndex={setIsProductEditIndex}
        setSelected={setSelected}
      />
      {/* Modal Add Poduct */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new product">
        <form action="" onSubmit={handelFormSubmit}>
          {renderInpts}
          <Select selected={selected} setSelected={setSelected} />

          <Colors
            colors={colors}
            colorSelected={colorSelected}
            handleSelectColor={handleSelectColor}
            handleRemoveSelectedColor={handleRemoveSelectedColor}
          />
          {error.color.length > 0 && <Error message={error.color} />}
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

      {/* Modal Edit Product */}
      <Modal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        title="Edit Product">
        <form action="" onSubmit={handelFormEdit}>
          {renderEditInput("title", "Product Title", "text", "title")}
          {renderEditInput(
            "description",
            "Product Description",
            "text",
            "description"
          )}
          {renderEditInput("imageUrl", "Product Image URL", "text", "imageUrl")}
          {renderEditInput("price", "Product Price", "text", "price")}

          <Select
            selected={productEdit.category}
            setSelected={(val) =>
              setProductEdit({ ...productEdit, category: val })
            }
          />

          <Colors
            colors={colors}
            colorSelected={productEdit.color}
            handleSelectColor={handleSelectEditColor}
            handleRemoveSelectedColor={handleRemoveSelectedColorEdit}
          />
          {error.color.length > 0 && <Error message={error.color} />}
          <div className="flex space-x-2 items-center">
            <Button className="bg-purple-700">Edit</Button>
            <Button
              className="bg-gray-400"
              onClick={closeEditModal}
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
