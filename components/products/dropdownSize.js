import { Fragment } from "react";
import styles from "../../styles/styles.module.scss";

function DropdownSize({ sizeValue, setSizeValue }) {
  const sizes = [
    { title: "Size", value: "Size" },
    { title: "XS", value: "XS" },
    { title: "S", value: "S" },
    { title: "M", value: "M" },
    { title: "L", value: "L" },
    { title: "XL", value: "XL" },
  ];

  function onDropDownChange(e) {
    setSizeValue(e.target.value);
  }

  function SizeItems() {
    return sizes.map((item, i) => (
      <li key={i}>
        <button
          className="dropdown-item"
          value={item.value}
          onClick={onDropDownChange}
        >
          {item.title}
        </button>
      </li>
    ));
  }

  return (
    <Fragment>
      <div className={`dropdown col-4 ${styles.dropdown}`}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {sizeValue}
        </button>

        <ul
          className={`dropdown-menu p-0 rounded-0 ${styles.dropdownMenu}`}
          aria-labelledby="dropdownMenuButton1"
        >
          {SizeItems()}
        </ul>
      </div>
    </Fragment>
  );
}

export default DropdownSize;
