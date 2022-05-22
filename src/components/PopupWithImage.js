import {Popup} from './Popup.js'

class PopupWithImage extends Popup {
  constructor(popup){
    super(popup)
    this._img = this._popup.querySelector('.popup__img');
    this._caption = this._popup.querySelector('.popup__text');
  }

  open(name, link ){
    super.open();
    this._caption.textContent = name;
    this._img.src = link;
    this._img.alt = name;

  }

}

export {PopupWithImage}
