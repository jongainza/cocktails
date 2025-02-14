import get from "./getElement.js";

function displayDrinks({ drinks }) {
  const title = get(".title");
  const section = get(".section-center");
  if (drinks) {
    const element = drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href="drink.html">
    <article class="cocktail" data-id="${id}">
    <img src="${image}
    " alt="${name}" />
    <h3>${name}</h3>
    </article>
    </a>`;
      })
      .join("");
    section.innerHTML = element;
    title.textContent = "";
    return section;
  } else {
    title.textContent = `sorry,no drinks math your search`;
    section.innerHTML = null;
  }
}

export default displayDrinks;
