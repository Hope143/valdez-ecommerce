import { popularProducts } from "../../helpers/data";
import Image from "next/image";
import styles from "../../styles/styles.module.scss";

function ProductItems() {
  function PopularProductsItems() {
    return popularProducts.map((item) => (
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item.id}>
        <div
          className={`px-5 py-3 position-relative m-auto ${styles.productColumn}`}
        >
          <Image src={item.img} width={280} height={350} />
          <div className={styles.productBgCircle}></div>

          <div className={styles.onHoverBGcolor}>
            <div
              className={`d-flex w-100 justify-content-center text-center ${styles.iconContainer}`}
            >
              <i className={`bi bi-cart3 fs-4 p-1 ${styles.icon}`}></i>
              <i className={`bi bi-search fs-4 p-1 ${styles.icon}`}></i>
              <i className={`bi bi-suit-heart fs-4 p-1 ${styles.icon}`}></i>
            </div>
            
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div
        className={`row g-2 justify-content-center ${styles.popularProductRow}`}
      >
        {PopularProductsItems()}
      </div>
    </div>
  );
}

export default ProductItems;
