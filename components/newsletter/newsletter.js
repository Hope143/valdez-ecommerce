import React from "react";
import styles from "../../styles/styles.module.scss";

function NewsLetter() {
  return (
    <section className={`px-2 ${styles.newsLetterSection}`}>
      <h1 className="text-center">Newsletter!</h1>
      <p className="lead text-center">
        Be updated anytime to get your favorite products
      </p>

      <form className="text-center m-auto">
        <input className="px-3 py-2" type="email" placeholder="your email" />
        <button className="px-4" type="submit">
          <i className="fs-5 bi bi-send-fill"></i>
        </button>
      </form>
    </section>
  );
}

export default NewsLetter;
