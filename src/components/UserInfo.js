class UserInfo {
  constructor(profileTitle, profileSubtitle){
    this._profileTitle = profileTitle;
    this._profileSubtitle = profileSubtitle;

    // this._userId = null;
  }

  getUserInfo({name, job}){
    //вставить значение из конструктора
    name.value = this._profileTitle.textContent;
    job.value = this._profileSubtitle.textContent;
    return {name, job}
  }

  setUserInfo(data){
    this._profileTitle.textContent = data.name;
    this._profileSubtitle.textContent = data.about;
    this._userId = data._id;
  }

  getUserId () {
    return this._userId
  };


}

export {UserInfo}
