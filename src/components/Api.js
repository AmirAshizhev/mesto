class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers

  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInformation(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc'
      }
    })
    .then(this._checkResponse);
  }

  setUserInformation(data){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })

    })

    .then(this._checkResponse);
  }

  getNewCard(data){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
      method: 'POST',
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })

    })
    .then(this._checkResponse)
    ;
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc'
      }
    })
    .then(this._checkResponse);
  }

  deleteCard(id){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
        'Content-Type': 'application/json'
      }

    })
    .then(this._checkResponse)
    ;
  }

  addLike(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }

  deleteLike(id){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc',
        'Content-Type': 'application/json'
      }

    })
    .then(this._checkResponse)
    ;
  }
}

export {Api}
