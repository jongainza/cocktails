import { hideLoading, showLoading } from "./loading.js";
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    hideLoading();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
