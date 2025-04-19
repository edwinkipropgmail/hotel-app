import Styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={Styles.itemContainer}>
        <div className={Styles.imageContainer}>
          <img className={Styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt="Image here"
          />
        </div>
        <div className={Styles.nameContainer}>
          <div className= {Styles.name}>{item.name}</div>
          <div className={Styles.amount} >Amount: {item.amount}</div>
          <div className={Styles.unit} >Unit: {item.unit}</div>
        </div>
      </div>
    </div>
  );
}
