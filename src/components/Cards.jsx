import hoodies from "../hoodies.json";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {hoodies.map((item, index) => (
          <Card key={index} hoodie={item} />
        ))}
      </div>
    </section>
  );
}
