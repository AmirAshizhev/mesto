//const popup = document.querySelector('.popup');
const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit-button');
const popupAdd = document.querySelector('.popup_add-button');
const closePopupEdit = popupEdit.querySelector('.popup__exit-button');
const closePopupAdd = popupAdd.querySelector('.popup__exit-button');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formEditElement = document.querySelector('#popup__form_edit');
let formAddElement = document.querySelector('#popup__form_add');
let nameInput = popupEdit.querySelector('#popup__name');
let jobInput = popupEdit.querySelector('#popup__description');
let namePlaceInput = popupAdd.querySelector('#popup__name');
let linkPlaceInput = popupAdd.querySelector('#popup__description');

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
  cardsList.prepend(cardElement);
}

initialCards.forEach(cardElement => renderCard(cardElement.link, cardElement.name));


//console.log(initialCards);
//

//function renderCards(initialCards) {
  //return `<li class="cards__item">
    //        <img src="${initialCards.link}" alt="руины церкви" class="cards__image">
    //        <h2 class="cards__title">${initialCards.name}</h2>
    //        <button type="button" class="cards__like"></button>
    //      </li>`;
//};

//cardsList.innerHTML += initialCards.map(renderCard).join('');

//функция создания карточки
//const createCard = (namePlaceInput, linkPlaceInput) => {
  // Клонируем шаблон, наполняем его информацией из объекта data, навешиваем всякие обработчики событий, о которых будет инфа ниже
 // const userTemplate = document.querySelector('#cards__template').content;
// клонируем содержимое тега template
  //const userElement = userTemplate.querySelector('.cards__item').cloneNode(true);

// наполняем содержимым
 // userElement.querySelector('.cards__image').src = linkPlaceInput.value;
 // userElement.querySelector('.cards__title').textContent = namePlaceInput.value;

// отображаем на странице
 // cardsList.append(userElement);
  // Возвращаем получившуюся карточку
//};
