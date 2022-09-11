import { Fragment } from "react";
import styles from "../../styles/styles.module.scss";

function DropdownColor({ colorValue, setColorValue }) {
  const color = [
    { title: "Color", value: "Color" },
    { title: "Khaki", value: "Khaki" },
    { title: "Brown", value: "Brown" },
    { title: "White", value: "White" },
    { title: "Gray", value: "Gray" },
    { title: "Black", value: "Black" },
  ];

  function onDropDownChange(e) {
    setColorValue(e.target.value);
  }

  function ColorItems() {
    return color.map((item, i) => (
      <li className="align-middle" key={i}>
        <button
          className="dropdown-item align-middle"
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
      <div className={`dropdown me-3 ${styles.dropdown}`}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {colorValue}
        </button>

        <ul
          className={`dropdown-menu p-0 rounded-0 ${styles.dropdownMenu}`}
          aria-labelledby="dropdownMenuButton1"
        >
          {ColorItems()}
        </ul>
      </div>
    </Fragment>
  );
}

export default DropdownColor;
