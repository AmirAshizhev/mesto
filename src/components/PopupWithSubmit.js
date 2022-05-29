import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popup, handleTrashSubmit){
    super(popup);
    this._handleTrashSubmit =handleTrashSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');


  }

  open(card){
    super.open();
    this._card = card

  }

  setEventListeners(){
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleTrashSubmit(this._card)

    }
  )}
}

export {PopupWithSubmit}
