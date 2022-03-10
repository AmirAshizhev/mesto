const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__exit-button');

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
