const KEY_STORAGE = "feedback-form-state";
const refs = {
    form: document.querySelector('form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('input', onFormInput);
// refs.email.addEventListener('input', onEmailInput);
// refs.message.addEventListener('input', onTextAreaInput);

function onFormInput (event) {
    const text = event.currentTarget.value;
    localStorage.setItem(KEY_STORAGE, text)
}
