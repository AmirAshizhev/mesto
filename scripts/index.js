const popup = document.querySelector('.popup');
const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');
const closePopup = document.querySelector('.popup__exit-button');

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('#popup__form');
let nameInput = popupEdit.querySelector('#popup__name');
let jobInput = popupEdit.querySelector('#popup__description');


//popup.addEventListener('click', function(event) {
//  if (event.target === event.currentTarget){
//    togglePopup();
//  }
//});
function openingPopupEdit(){
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openingPopupAdd(){
  popupAdd.classList.add('popup_opened');
}

function closingPopup (){
  popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closingPopup();
}

openPopupEdit.addEventListener('click', openingPopupEdit);

openPopupAdd.addEventListener('click', openingPopupAdd);

closePopup.addEventListener('click', closingPopup);

formElement.addEventListener('submit', formSubmitHandler);


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

function renderCards(initialCards) {
  return `<li class="cards__item">
            <img src="${initialCards.link}" alt="руины церкви" class="cards__image">
            <h2 class="cards__title">${initialCards.name}</h2>
            <button type="button" class="cards__like"></button>
          </li>`;
};

cardsList.innerHTML += initialCards.map(renderCards).join('');
