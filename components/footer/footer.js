import styles from "../../styles/styles.module.scss";

function Footer() {
  const socialMedia = [
    { title: "bi bi-facebook", bgColor: "#1877f2", link: "#" },
    { title: "bi bi-instagram", bgColor: "#c32aa3", link: "#" },
    { title: "bi bi-twitter", bgColor: "#1da1f2", link: "#" },
    { title: "bi bi-youtube", bgColor: "#ff0000", link: "#" },
  ];

  function SocialLinksHandler() {
    return socialMedia.map((social, i) => (
      <a href={social.link} key={i}>
        <i
          className={` rounded-circle text-light fs-5 ${social.title} ${styles.socialLinks}`}
          style={{ backgroundColor: social.bgColor }}
        ></i>
      </a>
    ));
  }

  return (
    <footer className={`py-5 m-auto ${styles.footer}`}>
      <div className="row g-1">
        <div className="col-12 col-lg-5 pe-1 pe-sm-5 mb-4 mb-lg-0">
          <h1 className="fs-2 fw-bold mb-3">VALDEZ.</h1>
          <p className="fs-5 fw-lighter mb-4 text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            consequatur blanditiis, facere consequuntur excepturi doloremque
            delectus repudiandae quos? Impedit, consequuntur.
          </p>
          <div>{SocialLinksHandler()}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 pe-lg-5">
          <h4 className="mb-4">Useful Links</h4>
          <div
            className={`d-flex justify-content-between ${styles.footerLinks}`}
          >
            <ul className="list-unstyled fs-5">
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Home
                </a>
              </li>

              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Man Fashion
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Accessories
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Order Tracking
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Wishlist
                </a>
              </li>
            </ul>
            <ul className="list-unstyled fs-5">
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Cart
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Woman Fashion
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  My Account
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Wishlist
                </a>
              </li>
              <li className="mb-1">
                <a className="text-dark text-decoration-none" href="">
                  Term
                </a>
              </li>
            </ul>
          </div>
          {/* Contact in Small screen */}
          <ul className="list-unstyled fs-5 d-block d-sm-none">
            <li className="d-flex">
              <i className="bi bi-geo-alt-fill pe-3"></i>{" "}
              <p>Bonifacio St. Taguig City, Philippines</p>
            </li>
            <li className="d-flex">
              <i className="bi bi-telephone-fill pe-3"></i>
              <p>+1 234 56 78</p>
            </li>
            <li className="d-flex">
              <i className="bi bi-envelope pe-3"></i>
              <p>valdezshop@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-3 d-none d-sm-block">
          <h4 className="mb-4">Contact</h4>
          <ul className="list-unstyled fs-5">
            <li className="d-flex">
              <i className="bi bi-geo-alt-fill pe-3"></i>{" "}
              <p>Bonifacio St. Taguig City, Philippines</p>
            </li>
            <li className="d-flex">
              <i className="bi bi-telephone-fill pe-3"></i>
              <p>+1 234 56 78</p>
            </li>
            <li className="d-flex">
              <i className="bi bi-envelope pe-3"></i>
              <p>valdezshop@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
