import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styles from "./foodDetails.module.css";
export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "35a5f6a216334def9c92b435b4bd118f";
  useEffect(() => {
    async function fetchFood() {
      const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await resp.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.resipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕑{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings} people</strong>
          </span>
          <span>
            <strong>
              {" "}
              {food.vegeterian ? "🥬 Vegeterian" : "🥩 Non-Vegeterian"}
            </strong>
          </span>
          <span>
            <strong> {food.vegan ? "🥬 Vegan" : " "}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} per serving.</strong>
          </span>
        </div>
      </div>
      <div>
        <h2>Ingredients:</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions:</h2>
        <div className={styles.instructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
