import { TProduct } from "../types";
import { TInput } from "../types/TInput";

export const data: TProduct[] = [
  {
    id: "1",
    title: "Ferari 2022 TM0099",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus
        ea molestias consequuntur quia fugiat incidunt dignissimos, dolorum
        ducimus animi assumenda doloremque, ad quam deserunt reprehenderit
        tempore optio vel rerum?`,
    imageUrl: "https://i.pinimg.com/736x/cf/c7/8d/cfc78d125a3f3f9175064452b47bb8cc.jpg",
    price: "500000",
    color:["#FF0032", "#2563eb"],
    category: {
        name:"cars",
        imageUrl: "https://i.pinimg.com/736x/cf/c7/8d/cfc78d125a3f3f9175064452b47bb8cc.jpg"
    }
  },
  {
    id: "2",
    title: "Bugati 2023 IMP00",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus
        ea molestias consequuntur quia fugiat incidunt dignissimos, dolorum
        ducimus animi assumenda doloremque, ad quam deserunt reprehenderit
        tempore optio vel rerum?`,
    imageUrl: "https://archive.challenge.ma/wp-content/uploads/2022/09/Bugatti-W16_Mistral-2024-1600-01-1.jpg",
    price: "1000000",
    color:["#FF0032", "#2563eb"],
    category: {
        name:"cars",
        imageUrl: "https://archive.challenge.ma/wp-content/uploads/2022/09/Bugatti-W16_Mistral-2024-1600-01-1.jpg"
    }
  },
  {
    id: "3",
    title: "Pagani 2024 TM0079",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus
        ea molestias consequuntur quia fugiat incidunt dignissimos, dolorum
        ducimus animi assumenda doloremque, ad quam deserunt reprehenderit
        tempore optio vel rerum?`,
    imageUrl: "https://cdn.motor1.com/images/mgl/W8GWyL/s1/pagani-imola-roadster.webp",
    price: "900000",
    color:["#FF0032", "#2563eb"],
    category: {
        name:"cars",
        imageUrl: "https://cdn.motor1.com/images/mgl/W8GWyL/s1/pagani-imola-roadster.webp"
    }
  },
  {
    id: "4",
    title: "Pagani 2024 TM0079",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus
        ea molestias consequuntur quia fugiat incidunt dignissimos, dolorum
        ducimus animi assumenda doloremque, ad quam deserunt reprehenderit
        tempore optio vel rerum?`,
    imageUrl: "https://cdn.motor1.com/images/mgl/W8GWyL/s1/pagani-imola-roadster.webp",
    price: "900000",
    color:["#FF0032", "#2563eb"],
    category: {
        name:"cars",
        imageUrl: "https://cdn.motor1.com/images/mgl/W8GWyL/s1/pagani-imola-roadster.webp"
    }
  },
];

export const inputData: TInput[] = [
  {
    id:"title",
    name: "title",
    type: "text",
    label: "Prodct Title"
  },
  {
    id:"description",
    name: "description",
    type: "text",
    label: "Product Description"
  },
  {
    id:"imageURL",
    name: "imageUrl",
    type: "text",
    label: "Product Image URL"
  },
  {
    id:"price",
    name: "price",
    type: "text",
    label: "Product Price"
  },
]

export const colors: string[] = [
  "#a855F7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#820000",
  "#FF0032"
]