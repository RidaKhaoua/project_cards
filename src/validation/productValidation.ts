type TProduct = {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  color: string
};

const MAX_SIZE_TITLE = 80;
const MIN_SIZE_TITLE = 10;

const MAX_SIZE_DESC = 900;
const MIN_SIZE_DESC = 10;

const validationProduct = (product: TProduct) => {
  const errors: TProduct = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    color: ""
  };

  const validUrl =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/.test(
      product.imageUrl
    );

  if (
    !product.title.trim() ||
    (product.title.length < MIN_SIZE_TITLE ||
      product.title.length > MAX_SIZE_TITLE)
  ) {
    errors.title = "Product title must be between 10 and 80 charachtes!";
  }

  if (
    !product.description.trim() ||
    (product.description.length < MIN_SIZE_DESC ||
      product.description.length > MAX_SIZE_DESC)
  ) {
    errors.description = `Product Description must be between ${MIN_SIZE_DESC} and ${MAX_SIZE_DESC} charachters `;
  }

  if (!product.imageUrl.trim() || !validUrl) {
    errors.imageUrl = "The URL is not Valid";
  }

  if (
    !product.price.trim() ||
    isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    errors.price = "The price is not Not a Number";
  }

  if(product.color.length === 0) {
    errors.color= "you should choose a color";
  }


  return errors;
};

export default validationProduct;
