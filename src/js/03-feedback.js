import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
}

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle (onTextInput, 500));


const STORAGE_KEY = "feedback-form-state"

fillText()


function onSubmit(event) {
    event.preventDefault()
    event.target.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onTextInput(event) {
    const message = {
        email: refs.email.value,
        message: refs.textarea.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
}

function fillText() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {
        refs.textarea.value = savedMessage.textarea
        refs.email.value = savedMessage.email;
    };
}
