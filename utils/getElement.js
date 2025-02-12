const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`there is an error with the element selector ${selector}`);
  }
};

export default getElement;
