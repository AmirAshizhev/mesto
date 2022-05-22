class Section {
  constructor({items, renderer}, selector){
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
  }

  renderItem() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(itemHtml) {
    this._selector.prepend(itemHtml);
  }

}

export {Section};
