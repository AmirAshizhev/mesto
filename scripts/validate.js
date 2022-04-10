// function enableValidation(config) {
//   const form = document.querySelector(config.form);

//   form.addEventListener('input', handleFormInput);
// }


// function handleFormInput(evt) {
//   const form = evt.currentTarget;
//   const input = evt.target;

//   input.setCustomValidity('')
//   setFieldError(input);
//   setSubmitButtonState(form);
// }



// function setFieldError(input){
//   const span = document.querySelector(`#${input.id}-error`);
//   span.textContent = input.validationMessage;
// }


// function setSubmitButtonState(form) {
//   const button = form.querySelector('.popup__save-button');
//   const isValid = form.checkValidity();

//   if (!isValid){
//     button.classList.add('popup__save-button_invalid');
//     button.setAttribute('disabled', 'disabled');
//   }
//   else {
//     button.classList.remove('popup__save-button_invalid');
//     button.removeAttribute('disabled');
//   }
// };

// enableValidation({
//   form: '#popup__form_add'
// });

// enableValidation({
//   form: '#popup__form_edit'
// });

// const formElement = document.querySelector('#popup__form_add');
// const formInput = formElement.querySelector('.popup__item');



// const showError = (element, errorMessage) => {
//   element.classList.add('popup__item_type_error');
//   const formError = formElement.querySelector(`.${formInput.id}-error`);
//   formError.textContent = errorMessage;
//   formError.classList.add('popup__item-error_active');
// };


// const hideError = (element) => {
//   const formError = formElement.querySelector(`.${formInput.id}-error`);
//   element.classList.remove('popup__item_type_error');
//   formError.classList.remove('popup__item-error_active');

//   formError.textContent = '';
// };


// const isValid = () => {
//   if (!formInput.validity.valid) {

//     showError(formInput, formInput.validationMessage);
//   } else {

//     hideError(formInput);
//   }
// };

// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener('input', isValid);



// const form = document.querySelector('#popup__form_add');
// const formInput = form.querySelector('.popup__item');
// const formError = form.querySelector(`.${formInput.id}-error`);

function enableValidation(){
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
});
}

const setEventListeners = (formElement) =>{
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'))
  console.log(inputList)
  const buttonElement = formElement.querySelector('.popup__save-button');
  // console.log(buttonElement)

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    console.log(inputElement)
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
});
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__item_type_error');
  errorElement.classList.add('popup__item-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__item_type_error');
  errorElement.classList.remove('popup__item-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  // console.log(inputList)
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_invalid');
    buttonElement.setAttribute('disabled', 'disabled');
  }
  else {
    buttonElement.classList.remove('popup__save-button_invalid');
    buttonElement.removeAttribute('disabled');
  }
};


enableValidation();




