import styles from "../../styles/styles.module.scss";
function NavigationBar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <div
          className={`d-flex justify-content-between w-100 ${styles.navContainer}`}
        >
          <a className={`navbar-brand ${styles.brand}`} href="#">
            VALDEZ.
          </a>

          <ul
            className={`d-flex justify-content-end w-100 h-100 list-unstyled m-auto fs-5 ${styles.links}`}
          >
            <li className="px-2 px-sm-3 align-middle">
              <a className="nav-link align-middle" href="#">
                SignUp
              </a>
            </li>
            <li className="px-2 px-sm-3">
              <a className="nav-link align-middle" href="#">
                Login
              </a>
            </li>
            <li className="ps-2 ps-sm-3">
              <a className="nav-link align-middle" href="#">
                <i className="bi bi-cart3 fs-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default NavigationBar;
