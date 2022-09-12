const input = document.querySelector('#validation-input');
const onInputBlur = event => {
    input.classList.add('invalid');
    input.classList.remove('valid');
    if (event.currentTarget.value.length === Number(input.dataset.length)) 
        input.classList.replace('invalid','valid');
    
}
input.addEventListener('blur', onInputBlur);

