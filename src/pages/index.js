import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidation.js'
import {Section} from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards, config } from '../utils/constants.js';
import { Api } from '../components/Api.js';
import '../pages/index.css';


const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-button')

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');
const popupAvatar = document.querySelector('.popup_avatar')
// const popupPic = document.querySelector('.popup_picture');

const inputListpopupEdit = popupEdit.querySelectorAll('.popup__item');
const inputListpopupAdd = popupAdd.querySelectorAll('.popup__item');

const cardTemplate = document.querySelector('#cards__template').content;

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileAvatr = document.querySelector('.profile__avatar');
const formEditElement = document.querySelector('#popup__form_edit');
const formAddElement = document.querySelector('#popup__form_add');
const formAvatarElement = document.querySelector('#popup__form_avatar');

const nameInput = popupEdit.querySelector('.popup__item_name');
const jobInput = popupEdit.querySelector('.popup__item_description');
const avtarInput = popupAvatar.querySelector('.popup__item_description');

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
    console.log(result)
    // section.renderItem(result)

    result.map((card) => {renderCard(card)
    })

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



const userInfo = new UserInfo(profileTitle, profileSubtitle, profileAvatr);

const popupEditForm = new PopupWithForm('.popup_edit-button', handleProfileFormSubmit);
popupEditForm.setEventListeners();
const popupAddForm = new PopupWithForm('.popup_add-button', handleCardFormSubmit);
popupAddForm.setEventListeners();

const popupAvatarForm = new PopupWithForm('.popup_avatar', handleAvatarFormSubmit)
popupAvatarForm.setEventListeners();

const popupImgForm = new PopupWithImage('.popup_picture');
popupImgForm.setEventListeners();

const popupWithSubmit = new PopupWithSubmit('.popup__trash', handleTrashSubmit);
popupWithSubmit.setEventListeners();

function handleTrashSubmit(card) {
  api.deleteCard(card.getCardId())
    .then(card._deleteCard())
    .then(popupWithSubmit.close())
    .catch((err) => {
      console.log(err);
    });
}

function handleAvatarFormSubmit(data){
  // console.log(data)
  // userInfo.setUserInfo(data);
  // popupAvatarForm.close();

  api.setUserAvatar(data)
  .then((result) => {
    userInfo.setUserInfo(result);
    popupAvatarForm.close();
    console.log(result)
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleProfileFormSubmit (data) {
  // console.log(data)
  // userInfo.setUserInfo(data);
  // popupEditForm.close();

  api.setUserInformation(data)
  .then((result) => {
    // console.log(result)
    userInfo.setUserInfo(result);
    popupEditForm.close();
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleCardFormSubmit (data){

  // renderCard(data);
  popupAddForm.close();

  formAddValidated.disableSubmitButton();

  api.getNewCard(data)
  .then((result) => {
    console.log(result)
    renderCard(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

buttonOpenPopupEdit.addEventListener('click', function() {
  popupEditForm.open();

  userInfo.getUserInfo({name: nameInput, job: jobInput})

  formEditValidated.hiderError()
});

buttonOpenPopupAdd.addEventListener('click', function() {
  popupAddForm.open();

  // userInfo.get
  formAddValidated.hiderError()

});

buttonOpenPopupAvatar.addEventListener('click', function() {
  popupAvatarForm.open();
  // userInfo.getUserInfo({link: avtarInput})

  formAvatarValidated.hiderError()
})


function handleCardClick(name, link){

  popupImgForm.open(name, link);
}

function handleLikeClick(card){

  if (card.getIsLiked()){
    api.deleteLike(card.getCardId())
    .then(card.setIsLiked())
    .then((data) => {
      card.setLikeCount(data.likes)})
    .catch((err) => {
      console.log(err);
    });
  }
  else{
    api.addLike(card.getCardId())
    .then(card.setIsLiked())
    .then((data) => {
      card.setLikeCount(data.likes)})
    .catch((err) => {
      console.log(err);
    });
  }
}

function handleDeleteIconClick(card){
  popupWithSubmit.open(card);


}


const cardsList = document.querySelector('.cards');

const createNewCard = (link, name, likes, id, ownerId) => {
  const card = new Card(link, name, likes, id, ownerId, cardTemplate, handleCardClick, handleDeleteIconClick, handleLikeClick, userInfo.getUserId());
  const cardItem = card.createCard();
  // console.log(userInfo.getUserId())
  // console.log(likes)
  // console.log(card)
  // console.log(card.getCardId())
  // console.log(cardItem)
  return cardItem;
}

const renderCard = (cardElement) => {
  const card = createNewCard(cardElement.link, cardElement.name, cardElement.likes, cardElement._id, cardElement.owner._id);
  section.addItem(card)
}

const section = new Section( renderCard, cardsList);
// section.renderItem();


const formEditValidated = new FormValidator(formEditElement, config)

formEditValidated.enableValidation();

const formAddValidated = new FormValidator(formAddElement, config)

formAddValidated.enableValidation();

const formAvatarValidated = new FormValidator (formAvatarElement, config)
formAvatarValidated.enableValidation();




