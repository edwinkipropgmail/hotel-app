import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerCont from "./components/InnerCont";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState ("57810")
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerCont>
          <FoodList setFoodId = {setFoodId} foodData={foodData} />
        </InnerCont>
        <InnerCont>
          <FoodDetail foodId={foodId} />
        </InnerCont>
      </Container>
    </div>
  );
}

export default App;
