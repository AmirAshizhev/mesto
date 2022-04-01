const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');
const popupPic = document.querySelector('.popup_picture');

const closePopupEdit = popupEdit.querySelector('.popup__exit-button');
const closePopupAdd = popupAdd.querySelector('.popup__exit-button');
const closePopupPic = popupPic.querySelector('.popup__exit-button');

const cardTemplate = document.querySelector('#cards__template').content;

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formEditElement = document.querySelector('#popup__form_edit');
const formAddElement = document.querySelector('#popup__form_add');
const nameInput = popupEdit.querySelector('.popup__item_name');
const jobInput = popupEdit.querySelector('.popup__item_description');
const namePlaceInput = popupAdd.querySelector('.popup__item_name');
const linkPlaceInput = popupAdd.querySelector('.popup__item_description');
const imgPopupPic = popupPic.querySelector('.popup__img');
const namePopupPic = popupPic.querySelector('.popup__text');


function openingPopup(popup){
  popup.classList.add('popup_opened');
}

function closingPopup (popup){
  popup.classList.remove('popup_opened');
}


function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closingPopup(popupEdit);
}

function handleCardFormSubmit (evt){
  evt.preventDefault();

  const data = {name: namePlaceInput.value, link: linkPlaceInput.value}
  renderCard(data, cardsList);
  linkPlaceInput.value = '';
  namePlaceInput.value = '';
  closingPopup(popupAdd);
}

openPopupEdit.addEventListener('click', function() {
  openingPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

openPopupAdd.addEventListener('click', function() {
  openingPopup(popupAdd);
});


function openPicPopup(cardElement){
  cardElement.querySelector('.cards__image').addEventListener('click', function(){
    openingPopup(popupPic);
    namePopupPic.textContent = cardElement.querySelector('.cards__title').textContent;
    imgPopupPic.src = cardElement.querySelector('.cards__image').src;
    imgPopupPic.alt = cardElement.querySelector('.cards__image').alt;
  })
}

closePopupEdit.addEventListener('click', function() {
  closingPopup(popupEdit);
});

closePopupAdd.addEventListener('click', function() {
  closingPopup(popupAdd);
});

closePopupPic.addEventListener('click', function() {
  closingPopup(popupPic);
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);
formAddElement.addEventListener('submit', handleCardFormSubmit);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsList = document.querySelector('.cards');

function createCard(link, name) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__image').src = link;
  cardElement.querySelector('.cards__title').textContent = name;
  cardElement.querySelector('.cards__image').alt = name;
  cardElement.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  })
  openPicPopup(cardElement);
  deletingCard(cardElement);
  return cardElement
}

const renderCard = (cardElement, cardsList) => {
  const card = createCard(cardElement.link, cardElement.name);

  cardsList.prepend(card);
}


initialCards.forEach(cardElement => renderCard(cardElement, cardsList));

function deleteCard(evt){
  const delcard = evt.currentTarget.closest('.cards__item');
  delcard.remove();
}

function deletingCard(cardElement){
  cardElement.querySelector('.cards__trash').addEventListener('click', deleteCard)
}


