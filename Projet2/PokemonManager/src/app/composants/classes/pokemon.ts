/**** La Classe Objet de Pokemon ****/
export class Pokemon {
  // Pokemon (0:id, 1:img, 2:nom, 3:géné, 4:type1, 5:type2, 6:taille, 7:poids)

  // Varibales --------------
  public _idPokemon: number;
  public _imgPokemon: string;
  public _nomPokemon: string;
  public _genPokemon: string;
  public _type1Pokemon: string;
  public _type2Pokemon: string;
  public _taillePokemon: string;
  public _poidsPokemon: string;

  // Constructeur --------------------------------------------------------------------------
  constructor(idPokemon: number, imgPokemon: string, nomPokemon: string, genPokemon: string,
              type1Pokemon: string, type2Pokemon: string, taillePokemon: string, poidsPokemon: string) {
    this._idPokemon = idPokemon;
    this._imgPokemon = imgPokemon;
    this._nomPokemon = nomPokemon;
    this._genPokemon = genPokemon;
    this._type1Pokemon = type1Pokemon;
    this._type2Pokemon = type2Pokemon;
    this._taillePokemon = taillePokemon;
    this._poidsPokemon = poidsPokemon;
  }
}
