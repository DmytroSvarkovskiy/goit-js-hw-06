const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const createEl = array => {
  return array.map(item => {
    const liEl = document.createElement("li");
    liEl.classList.add('item');
    liEl.textContent = item;
    return liEl;
  });
}

ulEl.append(...createEl(ingredients));
