class FormValidator {
  constructor(formSelector, data){
    this._formSelector = formSelector;

    this._inputSelector =  data.inputSelector;
    this._submitButtonSelector =  data.submitButtonSelector;
    this._inactiveButtonClass =  data.inactiveButtonClass;
    this._inputErrorClass =  data.inputErrorClass;
    this._errorClass =  data.errorClass;

    this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector))
    this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);

  }

  enableValidation(){

      this._formSelector.addEventListener('submit', (evt) => {evt.preventDefault(); });

      this._setEventListeners(this._formSelector);

  }

  _setEventListeners(){
    // const inputList = Array.from(formElement.querySelectorAll(this._inputSelector))
    // this._buttonElement = formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
      });
    });
  }



  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';

  };

  hiderError = (inputList, formElement) => {
    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement)
    })
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState(){
    if (this._hasInvalidInput()) {
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
