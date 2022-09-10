import React, { useState } from "react";
import DropdownColor from "./dropdownColor";
import DropdownSize from "./dropdownSize";
import ProductItems from "./productItems";

function Products() {
  const [colorValue, setColorValue] = useState("Color");
  const [sizeValue, setSizeValue] = useState("Size");
  console.log(colorValue);
  // console.log(sizeValue);

  return (
    <div className="px-3 pt-0 py-5 px-md-5 w-100">
      <h1 className="mb-4 mb-lg-5">Dresses</h1>
      <div className="d-flex justify-content-start align-items-center">
        <h3 className="me-2 me-sm-3 my-auto">Filter Products</h3>
        <DropdownColor colorValue={colorValue} setColorValue={setColorValue} />
        <DropdownSize sizeValue={sizeValue} setSizeValue={setSizeValue} />
      </div>
      <ProductItems />
    </div>
  );
}

export default Products;
