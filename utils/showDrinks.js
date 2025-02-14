import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import setDrink from "./setDrink.js";

async function showDrinks(url) {
  const data = await fetchDrinks(url);
  const element = await displayDrinks(data);
  if (element) {
    setDrink(element);
  }
}

export default showDrinks;
