import { HTMLAttributes } from "react";

interface TPrpos extends HTMLAttributes<HTMLSpanElement> {
  color: string;
  colorsSelecteds?: string[];
}

function Circle({ color, colorsSelecteds, ...rest }: TPrpos) {
  const checkIfSelected = colorsSelecteds?.includes(color) ? true : false;
  return (
    <span
      className={`w-5 h-5 block rounded-full cursor-pointer ${
        checkIfSelected ? "opacity-5" : ""
      }`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
}

export default Circle;
