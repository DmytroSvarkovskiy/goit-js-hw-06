const formEl = document.querySelector('.login-form');

const onInputSubmit = event=> {
    event.preventDefault();
    const emailValueEl = event.currentTarget.elements.email.value;
    const passValueEl = event.currentTarget.elements.password.value;
    if (emailValueEl === ''||passValueEl === '') {
       return alert('Увага, не всі поля заповнені');
    }
    console.log({
        email: emailValueEl,
        password:passValueEl
    });
    event.currentTarget.reset();
}
formEl.addEventListener('submit', onInputSubmit);