import { sendData } from './api.js';

const formElement = document.querySelector('.feedback__form');
const submitButtonElement = formElement.querySelector('.feedback__form-button');

const SubmitButtonCaption = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Отправить'
};

const toggleSubmitButton = (isDisabled) => {
  submitButtonElement.disabled = isDisabled;

  if (isDisabled) {
    submitButtonElement.textContent = SubmitButtonCaption.SUBMITTING;
  } else {
    submitButtonElement.textContent = SubmitButtonCaption.IDLE;
  }
};

// Отправка формы
const sendForm = async () => {
  try {
    toggleSubmitButton(true);
    await sendData(new FormData(formElement));
    toggleSubmitButton(false);

  } catch {
    toggleSubmitButton(false);
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
  formElement.reset();
};

formElement.addEventListener('submit', onFormSubmit);
