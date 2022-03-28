const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');
const popupPic = document.querySelector('.popop_big-pic');

const closePopupEdit = popupEdit.querySelector('.popup__exit-button');
const closePopupAdd = popupAdd.querySelector('.popup__exit-button');
const closePopupPic = popupPic.querySelector('.popup__exit-button');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formEditElement = document.querySelector('#popup__form_edit');
let formAddElement = document.querySelector('#popup__form_add');
let nameInput = popupEdit.querySelector('#popup__name');
let jobInput = popupEdit.querySelector('#popup__description');
let namePlaceInput = popupAdd.querySelector('#popup__name');
let linkPlaceInput = popupAdd.querySelector('#popup__description');
let imgPopupPic = popupPic.querySelector('.popup__img');
let namePopupPic = popupPic.querySelector('.popup__text');


function openingPopupEdit(){
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openingPopupAdd(){
  popupAdd.classList.add('popup_opened');
}



function closingPopup (popup){
  popup.classList.remove('popup_opened');
}

function formEditSubmitHandler (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closingPopup(popupEdit);
}

function formAddSubmitHandler (evt){
  evt.preventDefault();

  renderCard(linkPlaceInput.value, namePlaceInput.value);
  linkPlaceInput.value = '';
  namePlaceInput.value= '';
  closingPopup(popupAdd);
}

openPopupEdit.addEventListener('click', openingPopupEdit);
openPopupAdd.addEventListener('click', openingPopupAdd);


closePopupEdit.addEventListener('click', function() {
  closingPopup(popupEdit);
});

closePopupAdd.addEventListener('click', function() {
  closingPopup(popupAdd);
});

closePopupPic.addEventListener('click', function() {
  closingPopup(popupPic);
});

formEditElement.addEventListener('submit', formEditSubmitHandler);
formAddElement.addEventListener('submit', formAddSubmitHandler);


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

function renderCard(link, place) {
  const cardTemplate = document.querySelector('#cards__template').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);

  cardElement.querySelector('.cards__image').src = link;
  cardElement.querySelector('.cards__title').textContent = place;
  cardElement.querySelector('.cards__image').alt = place;
  cardElement.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  })
  picPopup(cardElement);
  deletingCard(cardElement);
  cardsList.prepend(cardElement);
}

initialCards.forEach(cardElement => renderCard(cardElement.link, cardElement.name));

function deleteCard(evt){
  const delcard = evt.currentTarget.closest('.cards__item');
  delcard.remove();
}

function deletingCard(cardElement){
  cardElement.querySelector('.cards__trash').addEventListener('click', deleteCard)
}

function openingPopupPic(cardElement){
  popupPic.classList.add('popup_opened');
  console.log(namePopupPic)
  console.log(imgPopupPic)
  console.log(cardElement.querySelector('.cards__title'))
  console.log(cardElement.querySelector('.cards__image'))
  namePopupPic.textContent = cardElement.querySelector('.cards__title').textContent;
  imgPopupPic.src = cardElement.querySelector('.cards__image').src;
}

function picPopup(cardElement){
  cardElement.querySelector('.cards__image').addEventListener('click', function(){
    openingPopupPic(cardElement);
  })
}
