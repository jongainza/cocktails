import get from "./getElement.js";
function displayDrink({ drinks }) {
  const drink = drinks[0];
  const { strDrink: name, strDrinkThumb: img, strInstructions: desc } = drink;
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
  ];
  console.log(ingredients);

  const section = get(".single-drink");
  const element = `<img src="${img}" alt="cocktail" class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${name}</h2>
        <p class="drink-desc">${desc}</p>
        <ul class="drink-ingredients">${ingredients
          .map((ingredient) => {
            if (ingredient) {
              return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
            }
          })
          .join("")}</ul>
        <a href="index.html" class="btn">all cocktails</a>
      </article>`;
  section.innerHTML = element;
}

export default displayDrink;
