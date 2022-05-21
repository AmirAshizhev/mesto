import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidation.js'
import {Section} from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

const btnOpenPopupEdit = document.querySelector('.profile__edit-button');
const btnOpenPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');
const popupPic = document.querySelector('.popup_picture');

const inputListpopupEdit = popupEdit.querySelectorAll('.popup__item');
const inputListpopupAdd = popupAdd.querySelectorAll('.popup__item');

const cardTemplate = document.querySelector('#cards__template').content;

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formEditElement = document.querySelector('#popup__form_edit');
const formAddElement = document.querySelector('#popup__form_add');
const nameInput = popupEdit.querySelector('.popup__item_name');
const jobInput = popupEdit.querySelector('.popup__item_description');

const buttonElement = popupAdd.querySelector('.popup__save-button')



const userInfo = new UserInfo(profileTitle, profileSubtitle);

const popupEditForm = new PopupWithForm(popupEdit, handleProfileFormSubmit);
popupEditForm.setEventListeners();
const popupAddForm = new PopupWithForm(popupAdd, handleCardFormSubmit);
popupAddForm.setEventListeners();
const popupImgForm = new PopupWithImage(popupPic);
popupImgForm.setEventListeners();


function handleProfileFormSubmit (data) {
  userInfo.setUserInfo(data);
  popupEditForm.close();
}

function handleCardFormSubmit (data){

  renderCard(data);
  popupAddForm.close();

  formAddValidated.addButtonClassList(buttonElement);
}

btnOpenPopupEdit.addEventListener('click', function() {
  popupEditForm.open();

  userInfo.getUserInfo({name: nameInput, job: jobInput})

  formEditValidated.hiderError(inputListpopupEdit, popupEdit)
});

btnOpenPopupAdd.addEventListener('click', function() {
  popupAddForm.open();

  formAddValidated.hiderError(inputListpopupAdd, popupAdd)

});


function handleCardClick(name, link){
  popupImgForm.open(name, link);
}


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

const createNewCard = (link, name) => {
  const card = new Card(link, name, cardTemplate, handleCardClick);
  const cardItem = card.createCard();
  return cardItem;
}

const renderCard = (cardElement) => {
  const card = createNewCard(cardElement.link, cardElement.name);
  section.addItem(card)
}

const section = new Section({items: initialCards, renderer: renderCard}, cardsList);
section.renderItem();


const config = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}

const formEditValidated = new FormValidator(formEditElement, config)

formEditValidated.enableValidation();

const formAddValidated = new FormValidator(formAddElement, config)

formAddValidated.enableValidation();




