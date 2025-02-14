import fetchDrinks from "./utils/fetchDrinks.js";

import displayDrink from "./utils/displayDrink.js";
const id = localStorage.getItem("drink");

const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

// const data = await fetchDrinks(URL);
// const { drinks } = data;
// const { strDrink: name, strInstructions: desc, strDrinkThumb: img } = drinks[0];
// console.log(name, desc, img);
// console.log(drinks);

async function showDrink(URL) {
  if (!id) {
    window.location.replace("index.html");
  } else {
    const data = await fetchDrinks(URL);
    displayDrink(data);
  }
}

window.addEventListener("DOMContentLoaded", showDrink(URL));
