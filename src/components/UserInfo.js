class UserInfo {
  constructor(profileTitle, profileSubtitle, profileAvatr){
    this._profileTitle = profileTitle;
    this._profileSubtitle = profileSubtitle;
    this._profileAvatrLink = profileAvatr;
  }

  getUserInfo(data){

    data.name.value = this._profileTitle.textContent;
    data.job.value = this._profileSubtitle.textContent;
    // data.link = this._profileAvatrLink
    return data
  }

  setUserInfo(data){
    this._profileTitle.textContent = data.name;
    this._profileSubtitle.textContent = data.about;
    this._profileAvatrLink.src = data.avatar;
    this._userId = data._id;
  }

  getUserId () {
    return this._userId
  };


}

export {UserInfo}
