import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidation.js'
import {Section} from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards, config } from '../utils/constants.js';
import { Api } from '../components/Api.js';
import '../pages/index.css';


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');
// const popupPic = document.querySelector('.popup_picture');

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


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
  .then((result) => {
    // console.log(result)
    // section.renderItem(result)

    result.map((card) => {renderCard(card)})
  })
  .catch((err) => {
    console.log(err);
});

api.getUserInformation()
  .then((result) => {
    console.log(result)
    userInfo.setUserInfo(result)
  })
  .catch((err) => {
    console.log(err);
  });



const userInfo = new UserInfo(profileTitle, profileSubtitle);

const popupEditForm = new PopupWithForm('.popup_edit-button', handleProfileFormSubmit);
popupEditForm.setEventListeners();
const popupAddForm = new PopupWithForm('.popup_add-button', handleCardFormSubmit);
popupAddForm.setEventListeners();
const popupImgForm = new PopupWithImage('.popup_picture');
popupImgForm.setEventListeners();


function handleProfileFormSubmit (data) {
  userInfo.setUserInfo(data);
  popupEditForm.close();

  api.setUserInformation(data)
}

function handleCardFormSubmit (data){

  renderCard(data);
  popupAddForm.close();

  formAddValidated.disableSubmitButton();
}

buttonOpenPopupEdit.addEventListener('click', function() {
  popupEditForm.open();

  userInfo.getUserInfo({name: nameInput, job: jobInput})

  formEditValidated.hiderError()
});

buttonOpenPopupAdd.addEventListener('click', function() {
  popupAddForm.open();

  formAddValidated.hiderError()

});


function handleCardClick(name, link){
  popupImgForm.open(name, link);
}


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

const section = new Section( renderCard, cardsList);
// section.renderItem();


const formEditValidated = new FormValidator(formEditElement, config)

formEditValidated.enableValidation();

const formAddValidated = new FormValidator(formAddElement, config)

formAddValidated.enableValidation();




