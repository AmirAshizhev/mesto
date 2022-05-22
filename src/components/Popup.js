class Popup {
  constructor(popup){
    this._popup = popup;
    this._btnClose = this._popup.querySelector('.popup__exit-button');
  }

  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
    this._btnClose.addEventListener('click', () => this.close())
  }

  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget){
        this.close();
     }
    })
  }

}

export {Popup}
