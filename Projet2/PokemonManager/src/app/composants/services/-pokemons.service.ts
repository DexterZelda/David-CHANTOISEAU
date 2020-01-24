import {Injectable} from '@angular/core';
import {Pokemon} from "../classes/pokemon";

@Injectable({
  providedIn: 'root'
})

/**** Classe static pour faire le pont avec le composant pokemons ****/
export class PokemonsService {
  // Chaque valeur est un tableau d'objet de Pokemon
  public _tabPokemons: Array<Pokemon>;
  // Pokemon préféré (0:id, 1:img, 2:nom, 3:géné, 4:type1, 5:type2, 6:taille, 7:poids)
  public _pokemon: Pokemon;
  // Nombre de Pokémons mais aussi le idPokemon
  public _nbPokemon: number;
  // Nombre de Pokemon total (22/01/2020 - avec Génération 8)
  public NB_POKEMON: number;
  public _textePokemonPrefered: string;
  // Caractéristiques des Pokémons
  public _imgPokemon: string;
  public _nomPokemon: string;
  public _genPokemon: number;
  public _typePokemon1: string;
  public _typePokemon2: string;
  public _taillePokemon: number;
  public _poidsPokemon: number;

  // PAS BESOIN DE CONSTRUCTEUR --------------------------

  // Rootage ---------------------------------------------
  // Méthode de app-routin.module.ts = canActivate(...) {}

  // Setters et Getters ------------
  // Retourne un tableau de pokemons
  getPokemons(): Array<Pokemon> {
    return this._tabPokemons;
  }

  // Retourne le nombre de pokemon
  getnbPokemon(): number {
    return this._nbPokemon;
  }

  // Méthodes --------------------------------------------
  // Ajouter un Pokemon
  ajouterPokemon() {
    // Caractéristiques des Pokemon
    this._nbPokemon++;
    this._genPokemon = Math.floor(Math.random() * 8) + 1;
    let tmpNom = this._nomPokemon + this._nbPokemon;
    // Image des différents Pokemons
    let imagePokemon = this._imgPokemon + this._nbPokemon.toString() + '.png';
    // Ajout des Pokemons (0:id, 1:img, 2:nom, 3:géné, 4:type1, 5:type2, 6:taille, 7:poids)
    let NewPokemon: Pokemon = new Pokemon(
      this._nbPokemon, imagePokemon, tmpNom, 'Génération : '
      + this._genPokemon, 'Type 1 : '
      + this._typePokemon1, 'Type 2 : '
      + this._typePokemon2, 'Taille : '
      + this._taillePokemon + 'm', 'Poids : '
      + this._poidsPokemon + 'kg'
      )
    ;
    this._tabPokemons.push(NewPokemon);
  }

  // Enlever un Pokemon
  enleverPokemon() {
    // On supprime le dernier élément du tableau
    this._tabPokemons.pop();
    // On décrémente le nombre de Pokemons
    this._nbPokemon--;
  }

  // Ajouter tous les Pokemons en récursivité
  ajouterAllPokemon() {
    if (this._nbPokemon < this.NB_POKEMON) {
      this.ajouterPokemon();
      // récursivité
      this.ajouterAllPokemon();
    }
  }

  // Enlever tous les Pokemons en récursivité
  enleverAllPokemon() {
    if (this._nbPokemon > 0) {
      this.enleverPokemon();
      // récursivité
      this.enleverAllPokemon();
    }
  }

  // Mettre à jour le Pokemon préféré
  majPokemonPrefered(valeur) {
    if (this._pokemon == null) {
      this._pokemon = this._tabPokemons[valeur - 1];
      this._textePokemonPrefered = this._pokemon._nomPokemon;
    } else if (this._pokemon._idPokemon == this._tabPokemons[valeur - 1]._idPokemon) {
      alert("C'est déjà votre Pokémon préféré !");
    } else {
      alert("Veuillez d'abord supprimer votre Pokémon préféré : "
        + this._pokemon._nomPokemon
        + "\npour le changer par celui-ci : "
        + this._tabPokemons[valeur - 1]._nomPokemon + " !\n\nMerci.");
    }
  }

  // Enlever le Pokemon préféré
  enleverPokemonPrefered() {
    this._pokemon = null;
    this._textePokemonPrefered = 'aucun';
  }
}
