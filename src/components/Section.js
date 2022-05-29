class Section {
  constructor(renderer, itemСontainer){

    this._renderer = renderer;
    this._itemСontainer = itemСontainer;
  }

  renderItem(items) {
    items.forEach((item) => this._renderer(item));
  }

  addItem(itemHtml) {
    this._itemСontainer.prepend(itemHtml);
  }

}

export {Section};
