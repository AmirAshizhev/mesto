class Card {


  constructor(link, name, template, handleCardClick) {
    this._link = link;
    this._name = name;

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

    this._setEventListeners();

    return this._cardElement
  }

  _setEventListeners(){
    this._cardElement.querySelector('.cards__like').addEventListener('click', (evt) => this._likeCard(evt));
    this._cardElement.querySelector('.cards__trash').addEventListener('click', (evt) => this._deleteCard(evt))
    // openPicPopup(this._cardElement);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
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
