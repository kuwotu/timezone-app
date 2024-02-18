import styles from "./Card.module.css";

const Card = ({ timezone, city, time, onDelete, key }) => {
  return (
    <div className={styles.container}>
      <div>{timezone}</div>
      <div>{city}</div>
      <div>{time}</div>
      <button onClick={() => onDelete(city)}>Delete</button>
    </div>
  );
};

export default Card;
