import styles from "./Card.module.css";

const Card = ({ timezone, city }) => {
  return (
    <div className={styles.container}>
      <div>{timezone}</div>
      <div>{city}</div>
    </div>
  );
};

export default Card;
