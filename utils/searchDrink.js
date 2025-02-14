import get from "./getElement.js";
import showDrinks from "./showDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const input = get(".search-form input");
input.addEventListener("input", () => {
  showDrinks(`${baseURL}${input.value}`);
});
