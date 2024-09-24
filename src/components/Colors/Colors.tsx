import { useState } from "react";
import Circle from "../ui/Circle/Circle";

type TPrpos = {
  colors: string[];
};

function Colors({ colors }: TPrpos) {
  const [colorSelected, setColorSelected] = useState<string[]>([]);

  const handleSelectColor = (color: string) => {
    setColorSelected([...colorSelected, color]);
  };

  const renderColors = colors.map((color) => (
    <Circle
      color={color}
      onClick={() =>
        colorSelected.includes(color) ? "" : handleSelectColor(color)
      }
      colorsSelecteds={colorSelected}
    />
  ));

  const renderSelectedColor = colorSelected.map((color) => (
    <div
      className="w-fit rounded text-white py-1 px-2 cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => {
        const newColors = colorSelected.filter(
          (colorItem) => colorItem !== color
        );
        setColorSelected([...newColors]);
      }}>
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
