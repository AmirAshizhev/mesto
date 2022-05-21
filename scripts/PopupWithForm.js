import {Popup} from './Popup.js'

class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit){
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__item')
    // this._inputName = this._popup.querySelector('.popup__item_name');
    // this._inputDescription = this._popup.querySelector('.popup__item_description');
  }

  _getInputValue(){
    this._inputsData = {}
    this._inputList.forEach(inputItem => {
      this._inputsData[inputItem.name] = inputItem.value;
    });

    return this._inputsData
  }


  setEventListeners(){
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValue());
      // this.close();
      this._popupForm.reset();
    }
    );
  }


}

export {PopupWithForm}
