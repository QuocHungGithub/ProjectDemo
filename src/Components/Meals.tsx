import axios from "axios";
import "./Meals.css";
import { useEffect, useState } from "react";
const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((error) => console.log(error));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div className="item" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <h3>{strMeal}</h3>
        <p>{idMeal}</p>
      </div>
    );
  });
  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
