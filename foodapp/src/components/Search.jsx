import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "35a5f6a216334def9c92b435b4bd118f";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("beef");
  useEffect(() => {
    async function fetchFood() {
      const resp = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await resp.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
import { useEffect, useState } from "react";
