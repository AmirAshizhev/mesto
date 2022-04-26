//import {cardTemplate, namePopupPic, imgPopupPic, popupPic} from './index.js'

class Card {
  // static cardTemplate = document.querySelector('#cards__template').content;

  constructor(link, name) {
    this._link = link;
    this._name = name;
  }

  _getTamplate(){
    const cardElement = document.querySelector('#cards__template').content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  createCard(){
    this._cardElement = this._getTamplate();

    this._cardElement.querySelector('.cards__image').src = this._link;
    this._cardElement.querySelector('.cards__title').textContent = this._name;
    this._cardElement.querySelector('.cards__image').alt = this._name;

    this._setEventListeners();
    // this.deleteCard();
    return this._cardElement
  }


  _setEventListeners(){
    this._cardElement.querySelector('.cards__like').addEventListener('click', (evt) => this._likeCard(evt));
    this._cardElement.querySelector('.cards__trash').addEventListener('click', (evt) => this.deleteCard(evt))
  }

  _likeCard(evt){
    evt.target.classList.toggle('cards__like_active');
  }

  deleteCard(evt){
    const delcard = evt.currentTarget.closest('.cards__item');
    delcard.remove();
  }

  // openPicPopup(cardElement){
  //   cardElement.querySelector('.cards__image').addEventListener('click', function(){
  //     openingPopup(popupPic);
  //     namePopupPic.textContent = cardElement.querySelector('.cards__title').textContent;
  //     imgPopupPic.src = cardElement.querySelector('.cards__image').src;
  //     imgPopupPic.alt = cardElement.querySelector('.cards__image').alt;
  //   })
  // }



}




// function createCard(link, name) {
//   const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
//   cardElement.querySelector('.cards__image').src = link;
//   cardElement.querySelector('.cards__title').textContent = name;
//   cardElement.querySelector('.cards__image').alt = name;
//   cardElement.querySelector('.cards__like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('cards__like_active');
//   })
//   openPicPopup(cardElement);
//   cardElement.querySelector('.cards__trash').addEventListener('click', deleteCard)
//   return cardElement
// }
 export {Card};
