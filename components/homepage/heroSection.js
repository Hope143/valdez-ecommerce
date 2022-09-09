import Image from "next/image";
import styles from "../../styles/styles.module.scss";
import { sliderItems } from "../../helpers/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  function CarouselItem() {
    return sliderItems.map((item) => (
      <div
        className={`carousel-item ${item.active} ${styles.carouselItem}`}
        key={item.id}
      >
        <div
          className="row justify-content-center"
          style={{ backgroundColor: `#${item.bg}` }}
        >
          <div
            className={`col-lg-6 d-flex justify-content-center ${styles.imageContainer}`}
          >
            <Image
              className={`img-fluid ${styles.heroImage}`}
              src={item.img}
              width="800"
              height="800"
              alt="..."
            />
            <div className={styles.circle}></div>
          </div>
          <div
            className={`col-lg-6 my-auto text-center text-lg-start ${styles.descContainer}`}
          >
            <h1 className="mb-3">{item.title}</h1>
            <p className="px-1 px-lg-0">{item.desc}</p>
            <button className="px-3 py-1" type="button">
              Shop Now <i className="bi bi-bag-check-fill"></i>
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section>
      <div
        id="homePageCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homePageCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homePageCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">{CarouselItem()}</div>

        <button
          className={`carousel-control-prev ${styles.buttonIndex}`}
          type="button"
          data-bs-target="#homePageCarousel"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.carouselIcon}
          />
        </button>
        <button
          className={`carousel-control-next ${styles.buttonIndex}`}
          type="button"
          data-bs-target="#homePageCarousel"
          data-bs-slide="next"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.carouselIcon}
          />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
