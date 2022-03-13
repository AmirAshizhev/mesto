const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__exit-button');
const savePopup = popup.querySelector('.popup__save-button');

function togglePopup () {
  popup.classList.toggle('popup_opened');
}

popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget){
    togglePopup();
  }
});

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);



let formElement = document.querySelector('.popup');

let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__description');



function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');

  profileTitle.textContent = nameInputValue;
  profileSubtitle.textContent = jobInputValue;
  togglePopup();
}


popup.addEventListener('submit', formSubmitHandler);
