const nameSpan = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

const onInputPrinting = event => {
    nameSpan.textContent = event.currentTarget.value;
    event.currentTarget.value.trim() === ''? nameSpan.textContent = "Anonymous":null; 
}

input.addEventListener('input', onInputPrinting);