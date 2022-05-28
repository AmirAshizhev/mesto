class Card {


  constructor(link, name, likes, template, handleCardClick) {
    this._link = link;
    this._name = name;
    this._likes = likes;

    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTamplate(){
    const cardElement = this._template.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  createCard(){
    this._cardElement = this._getTamplate();

    this._cardImage = this._cardElement.querySelector('.cards__image')
    this._cardImage.src = this._link;
    this._cardElement.querySelector('.cards__title').textContent = this._name;
    this._cardImage.alt = this._name;
    this._likeButton = this._cardElement.querySelector('.cards__like');
    this._likeCountner = this._cardElement.querySelector('.cards__like-counter');
    this._likeCountner.textContent = this._likes;

    this._setEventListeners();

    return this._cardElement
  }

  _setEventListeners(){
    this._likeButton.addEventListener('click', () => this._likeCard());
    this._cardElement.querySelector('.cards__trash').addEventListener('click', () => this._deleteCard())
    // openPicPopup(this._cardElement);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _likeCard(){
    this._likeButton.classList.toggle('cards__like_active');
  }

  getCardLikes(){
    this._likeCountner.textContent = this._likes;
  }

  _deleteCard(){
    this._cardElement.closest('.cards__item').remove();

  }
}

export {Card};
