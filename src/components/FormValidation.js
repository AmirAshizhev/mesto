class FormValidator {
  constructor(formElement, data){
    this._formElement = formElement;

    this._inputSelector =  data.inputSelector;
    this._submitButtonSelector =  data.submitButtonSelector;
    this._inactiveButtonClass =  data.inactiveButtonClass;
    this._inputErrorClass =  data.inputErrorClass;
    this._errorClass =  data.errorClass;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  }

  enableValidation(){

    this._formElement.addEventListener('submit', (evt) => {evt.preventDefault(); });

      this._setEventListeners();

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
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';

  };

  hiderError = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
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
