import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div>{props.timezone}</div>
      <div>{props.city}</div>
      <div>{props.time}</div>
    </div>
  );
};

export default Card;
