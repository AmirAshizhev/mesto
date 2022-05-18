class Popup {
  constructor(popup){
    this._popup = popup;
  }

  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      // const openedPopup = document.querySelector('.popup_opened'); //возможно написать this._popup ибо только он и есть
      this.close();
      // closingPopup(openedPopup); // надо написать this.close(this._popup) ?
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click', (evt) => {
      // console.log(evt.target)
      // console.log(evt.currentTarget)
      if (evt.target === evt.currentTarget){
        this.close();
     }
    })
  }

}

export {Popup}
