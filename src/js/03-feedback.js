import trottle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
const formData  = {};

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
//  у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

refs.form.addEventListener('input', trottle(event =>{
    formData[event.target.name]=event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}
    ,500));


// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
// заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

function SavedData() {
  const StorageData = localStorage.getItem(KEY_STORAGE);
  if (StorageData) {
    const {email, message} = JSON.parse(StorageData);
    refs.email.value = email;
    refs.message.value = message;  
}
}

// SavedData();



// Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.



function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
}
