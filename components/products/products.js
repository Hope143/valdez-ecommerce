import React, { useState } from "react";
import DropdownColor from "./dropdownColor";
import DropdownSize from "./dropdownSize";
import ProductItems from "./productItems";
import SearchProduct from "./searchProduct";
import styles from "../../styles/styles.module.scss";

function Products() {
  const [colorValue, setColorValue] = useState("Color");
  const [sizeValue, setSizeValue] = useState("Size");
  const [searchItem, setSearchItem] = useState("");
  // console.log(searchItem);
  // console.log(sizeValue);

  return (
    <div className="px-3 pt-0 py-5 px-md-5 w-100">
      <h1 className="mb-4 mb-lg-5">Dresses</h1>
      <div className={`row ${styles.productRow}`}>
        <div className="col-12 col-lg-6 mb-3 mb-lg-0 d-flex justify-content-start align-items-center">
          <h3 className="me-4 me-sm-3 my-auto">Filter Products</h3>
          <DropdownColor
            colorValue={colorValue}
            setColorValue={setColorValue}
          />
          <DropdownSize sizeValue={sizeValue} setSizeValue={setSizeValue} />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-start align-items-center">
          <h3 className="me-4 me-sm-3 my-auto">Search Products</h3>
          <SearchProduct
            searchItem={searchItem}
            setSearchItem={setSearchItem}
          />
        </div>
      </div>
      <ProductItems
        colorValue={colorValue}
        sizeValue={sizeValue}
        searchItem={searchItem}
      />
    </div>
  );
}

export default Products;
