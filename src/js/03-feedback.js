import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
}

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle (onTextInput, 500));


const STORAGE_KEY = "feedback-form-state"

let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))


fillText()



function onTextInput(event) {
    const message = {
        email: refs.email.value,
        message: refs.textarea.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
}


function onSubmit(event) {
    event.preventDefault()
 const submitData = {
        email: refs.email.value,
        message: refs.textarea.value,
 };
    
    if (refs.email.value === '' || refs.textarea.value === '') {
        return alert(`Fill the form`)
    } else {
    console.log(submitData)
    }

    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function fillText() {
    if (savedMessage) { 
        refs.textarea.value = savedMessage.message
        refs.email.value = savedMessage.email;
    };
}
