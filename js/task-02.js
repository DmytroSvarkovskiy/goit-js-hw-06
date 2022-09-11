const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const createEl = (ingredients) => {
  const addEl = ingredients.map(item => {
    const liEl = document.createElement("li");
    liEl.classList.add('item');
    liEl.textContent = item;
    return liEl;
  });
  return addEl;
}

const newElements = (createEl(ingredients));
ulEl.append(...newElements);
