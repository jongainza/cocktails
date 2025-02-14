import showDrinks from "./utils/showDrinks.js";
import "./utils/searchDrink.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

window.addEventListener("DOMContentLoaded", () => showDrinks(URL));
