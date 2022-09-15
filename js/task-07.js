const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.setAttribute('value', '16');

const onChangeRange = event => {
     spanEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', onChangeRange);
