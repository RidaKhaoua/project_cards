import { HtmlHTMLAttributes, useState } from "react";
import Circle from "../ui/Circle/Circle";

interface IPrpos extends HtmlHTMLAttributes<HTMLDivElement> {
  colors: string[];
  colorSelected: string[];
  handleSelectColor: (val: string) => void;
  handleRemoveSelectedColor: (val: string) => void
}

function Colors({ colors,colorSelected, handleSelectColor, handleRemoveSelectedColor, ...rest }: IPrpos) {



  const renderColors = colors.map((color) => (
    <Circle
      key={color}
      color={color}
      onClick={() =>
        colorSelected.includes(color) ? "" : handleSelectColor(color)
      }
      colorsSelecteds={colorSelected}
      {...rest}
    />
  ));

  const renderSelectedColor = colorSelected.map((color) => (
    <div
      key={color}
      className="w-fit rounded text-white py-1 px-2 cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => {
       handleRemoveSelectedColor(color)
      }}
      >
      {color}
    </div>
  ));

  return (
    <div className="my-5">
      <div className="flex items-baseline justify-normal gap-1  mb-5 flex-wrap space-y-2">
        {renderSelectedColor}
      </div>
      <div className="flex items-center space-x-1">{renderColors}</div>
    </div>
  );
}

export default Colors;
