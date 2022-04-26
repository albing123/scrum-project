import React from "react";
import styles from "./Card.module.css";

const Card = ({ hoodie }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.infoWrap}>
        <div className={styles.titleWrap}>
          <h2>{hoodie.brand} Hoodie</h2>
          <h3>{hoodie.colorName}</h3>
        </div>
        <div className={styles.textWrap}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            natus unde sequi! Asperiores voluptatem obcaecati iusto fugiat error
            corrupti assumenda?
          </p>
        </div>
        <div className={styles.buttonWrap}>
          <button>Add to cart</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
