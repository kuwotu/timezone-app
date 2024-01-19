import styles from "./Card.module.css";

const Card = ({ timezone, city, time }) => {
  return (
    <div className={styles.container}>
      <div>{timezone}</div>
      <div>{city}</div>
      <div>{time}</div>
    </div>
  );
};

export default Card;
