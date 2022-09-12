const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const value=document.querySelector('#value');
const onDecrementClick = () =>
    value.textContent = counterValue -= 1;
const onIncrementClick = () =>
    value.textContent = counterValue += 1;


btnDecrement.addEventListener('click', onDecrementClick);
btnIncrement.addEventListener('click', onIncrementClick);
