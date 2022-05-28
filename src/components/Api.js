class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers

  }

  getUserInformation(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
    });
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
      headers: {
        authorization: 'c694f23c-67e8-4141-af46-7a2dc53c55cc'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

}

export {Api}
