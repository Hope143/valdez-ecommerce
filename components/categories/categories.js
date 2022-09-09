import { categories } from "../../helpers/data";
import Image from "next/image";
import styles from "../../styles/styles.module.scss";

function Categories() {
  function CategoryItems() {
    return categories.map((item) => (
      <div
        className={`col-12 col-sm-6 col-lg-4 gx-2 position-relative ${styles.categoriesContainer}`}
        key={item.id}
      >
        <Image
          src={item.img}
          width="1340px"
          height="1500px"
          objectFit="cover"
          alt="styles Images"
        />
        <div className={`${styles.categoryTitle}`}>
          <div className="d-flex flex-column w-100">
            <h1 className="mb-4 mx-auto">{item.title}</h1>
            <button className="fs-5 border-white mx-auto bg-light text-dark">
              Show Now <i className="bi bi-bag-check-fill"></i>
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="px-3 py-5 p-md-5 w-100">
      <div className="row">{CategoryItems()}</div>
    </div>
  );
}

export default Categories;
