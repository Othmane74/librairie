export default class Livre {
  constructor(id, titre, qtestock, prix) {
    this._titre = titre;
    this._qtestock = qtestock;
    this._prix = prix;
    this._id = id;
  }

  get titre() {
    return this._titre;
  }

  get qtestock() {
    return this._qtestock;
  }

  get prix() {
    return this._prix;
  }

  get id() {
    return this._id;
  }

  set titre(titre) {
    this._titre = titre;
  }

  set qtestock(qtestock) {
    this._qtestock = qtestock;
  }

  set prix(prix) {
    this._prix = prix;
  }
}
