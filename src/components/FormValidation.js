class FormValidator {
  constructor(formSelector, data){
    this._formSelector = formSelector;

    this._inputSelector =  data.inputSelector;
    this._submitButtonSelector =  data.submitButtonSelector;
    this._inactiveButtonClass =  data.inactiveButtonClass;
    this._inputErrorClass =  data.inputErrorClass;
    this._errorClass =  data.errorClass;

  }

  enableValidation(){

      this._formSelector.addEventListener('submit', (evt) => {evt.preventDefault(); });

      this._setEventListeners(this._formSelector);

  }

  _setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector))
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      this._checkInputValidity(formElement, inputElement);
      this._toggleButtonState(inputList);
      });
    });
  }



  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';

  };

  hiderError = (inputList, formElement) => {
    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement)
    })
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState(inputList){
    if (this._hasInvalidInput(inputList)) {
      this.disableSubmitButton();
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }


  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
  }

}

export {FormValidator};
