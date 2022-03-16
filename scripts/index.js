const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__exit-button');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('#popup__form');
let nameInput = popup__form.querySelector('#popup__name');
let jobInput = popup__form.querySelector('#popup__description');

//popup.addEventListener('click', function(event) {
//  if (event.target === event.currentTarget){
//    togglePopup();
//  }
//});
function openingPopup(){
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
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

openPopup.addEventListener('click', openingPopup);

closePopup.addEventListener('click', closingPopup);

formElement.addEventListener('submit', formSubmitHandler);
