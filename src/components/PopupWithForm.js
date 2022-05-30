import {Popup} from './Popup.js'

class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit){
    super(popup);
    this._handleFormSubmit = handleFormSubmit;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__item');
    this._buttonSubmit = this._popup.querySelector('.popup__save-button')
  }

  _getInputValue(){
    this._inputsData = {}
    this._inputList.forEach(inputItem => {
      this._inputsData[inputItem.name] = inputItem.value;
    });

    return this._inputsData
  }

  close(){
    super.close();
    this._popupForm.reset();
  }

  setEventListeners(){
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValue());
    }
    );
  }

  renderLoading(isLoading) {
    return isLoading ? this._buttonSubmit.textContent = 'Сохранение...' : this._buttonSubmit.textContent = 'Сохранить'
}
}

export {PopupWithForm}
