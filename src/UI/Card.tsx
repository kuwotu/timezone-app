import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  timezone: string;
  city: string;
  time: string;
  onDelete: () => void;
}

const Card = ({ timezone, city, time, onDelete }: CardProps) => {
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
