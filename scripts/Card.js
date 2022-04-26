import {openPicPopup} from './index.js'

class Card {
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
    openPicPopup(this._cardElement);
    return this._cardElement
  }

  _setEventListeners(){
    this._cardElement.querySelector('.cards__like').addEventListener('click', (evt) => this._likeCard(evt));
    this._cardElement.querySelector('.cards__trash').addEventListener('click', (evt) => this._deleteCard(evt))
  }

  _likeCard(evt){
    evt.target.classList.toggle('cards__like_active');
  }

  _deleteCard(evt){
    const delcard = evt.currentTarget.closest('.cards__item');
    delcard.remove();
  }
}

export {Card};
