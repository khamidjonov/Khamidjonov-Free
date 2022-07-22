import API_URL from './configAPI';

const getMealById = async (mealId) => {
  const res = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return await res.json();
};

const getAllCategories = async () => {
  const res = await fetch(API_URL + 'categories.php');
  return await res.json();
};

const filterMealsByCategory = async (categoryName) => {
  const res = await fetch(API_URL + `filter.php?c=${categoryName}`);
  return await res.json();
};

export { getMealById, getAllCategories, filterMealsByCategory };
