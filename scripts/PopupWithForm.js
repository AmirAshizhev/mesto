import {Popup} from './Popup'

class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit){
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputName = this._popup.querySelector('.popup__item_name');
    this._inputDescription = this._popup.querySelector('.popup__item_description');
  }

  _getInputValue(){
    return this._inputName,
    this._inputDescription
  }

  setEventListeners(){
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }


}

export {PopupWithForm}
