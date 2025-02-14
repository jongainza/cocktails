const setDrink = (element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id;
    console.log(id);
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
