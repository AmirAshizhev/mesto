function enableValidation() {
  const form = document.querySelector('#popup__form_add[name="popup__form"]');

  form.addEventListener('submit', handleFormSubmit);//сабмиты есть и вдругом js файле
  //form.addEventListener('input', handleFormInput);
}

function handleFormSubmit (evt) {
  evt.preventDefault()

  const form = evt.currentTarget;
  const isValid = form.checkValidity();
  console.log(isValid)
  if (isValid) {
    alert('isValid');
  }
  else {
    alert('notisValid')
  }

}

enableValidation();
