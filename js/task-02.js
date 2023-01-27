const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liItems = ingredients.map(item => {
  const a = item;
  item = document.createElement('li');
  item.classList = 'item';
  item.textContent = a;
  return item;
});
document.querySelector('#ingredients').append(...liItems);
