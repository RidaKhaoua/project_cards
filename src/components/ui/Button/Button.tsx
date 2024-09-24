import React, { ButtonHTMLAttributes } from "react";

interface IPrpos extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}

function Button({ children, className, width="w-full", ...rest }: IPrpos) {
  return (
    <button
      className={`${className} ${width} p-2 rounded text-white`}
      {...rest}>
      {children}
    </button>
  );
}

export default Button;
