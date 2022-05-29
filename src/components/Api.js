class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers

  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInformation(){
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc'
      }
    })
    .then(this._checkResponse);
  }

  setUserInformation(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })

    })

    .then(this._checkResponse);
  }

  getNewCard(data){
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })

    })
    .then(this._checkResponse)
    ;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  deleteCard(id){
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers

    })
    .then(this._checkResponse)
    ;
  }

  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  deleteLike(id){
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers

    })
    .then(this._checkResponse)
    ;
  }

  setUserAvatar(data){
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })

    })

    .then(this._checkResponse);
  }


}

export {Api}
