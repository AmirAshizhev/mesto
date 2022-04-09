function enableValidation(config) {
  const form = document.querySelector(config.form);

  //form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', handleFormInput);
}

// function handleFormSubmit(evt) {
//   evt.preventDefault();

//   const form = evt.currentTarget;
//   const isValid = form.ValidityState();
//   console.log(isValid);
//   if (isValid) {
//     alert('isValid');
//   }
//   else {
//     alert('notisValid')
//   }

// }

function handleFormInput(evt) {
  const form = evt.currentTarget;
  const input = evt.target;

  input.setCustomValidity('')
  // setError(input);
  setFieldError(input);
  setSubmitButtonState(form);
}



// function setError(input) {
//   const validity = input.validity;
//   input.setCustomValidity('')

  // if (validity.tooShort || input.tooLong){
  //   const currentLenght = input.value.lenght;
  //   const min = input.getAttribute("minlength");
  //   const max = input.getAttribute("maxlength");
  //   input.setCustomValidity(
  //     `Строка имеет неверную длину. введено ${currentLenght} сималов. а должно быть от ${min} до  ${max}`
  //   );
  // }

  // if (input.typeMismatch){
  //   input.setCustomValidity('Это не ссылка')
  // }
// }

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

