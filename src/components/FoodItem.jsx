import styles from "./foodItem.module.css";
import { Fragment } from "react";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <div key={food.id}>
        {" "}
        <div className={styles.itemContent}>
          <p className={styles.itemName}> {food.title}</p>
        </div>
        <img className={styles.itemImage} src={food.image} alt="Food Image" />
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              console.log(food.id);
              setFoodId(food.id);
            }}
            className={styles.itemButton}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
