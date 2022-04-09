function enableValidation(config) {
  const form = document.querySelector(config.form);

  form.addEventListener('input', handleFormInput);
}


function handleFormInput(evt) {
  const form = evt.currentTarget;
  const input = evt.target;

  input.setCustomValidity('')
  setFieldError(input);
  setSubmitButtonState(form);
}



function setFieldError(input){
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}


function setSubmitButtonState(form) {
  const button = form.querySelector('.popup__save-button');
  const isValid = form.checkValidity();

  if (!isValid){
    button.classList.add('popup__save-button_invalid');
    button.setAttribute('disabled', 'disabled');
  }
  else {
    button.classList.remove('popup__save-button_invalid');
    button.removeAttribute('disabled');
  }
};

enableValidation({
  form: '#popup__form_add'
});

enableValidation({
  form: '#popup__form_edit'
});

