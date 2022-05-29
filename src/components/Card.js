class Card {


  constructor(link, name, likes, id, ownerId, template, handleCardClick, handleDeleteIconClick, userId) {
    this._link = link;
    this._name = name;
    this._likes = likes;
    this._id = id;
    this._ownerId = ownerId;
    this._userId = userId;

    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick
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

    this._trashIcon = this._cardElement.querySelector('.cards__trash')
    if (this._ownerId === this._userId) {
      this._trashIcon.classList.add('cards__trash_visible')
    }

    this._setEventListeners();

    return this._cardElement
  }

  _setEventListeners(){
    this._likeButton.addEventListener('click', () => this._likeCard());
    this._trashIcon.addEventListener('click', () => this._handleDeleteIconClick(this))
    // openPicPopup(this._cardElement);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)

    });
  }

  _likeCard(){
    this._likeButton.classList.toggle('cards__like_active');
  }



  _deleteCard(){
    this._cardElement.closest('.cards__item').remove();

  }

  getCardId = () => this._id;


}

export {Card};
