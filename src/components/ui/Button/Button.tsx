import React, { ButtonHTMLAttributes } from "react";

interface IPrpos extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

function Button({ children, className, ...rest }: IPrpos) {
  return (
    <button className={`${className} w-full p-2 rounded text-white`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
