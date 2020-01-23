import {Component, OnInit} from '@angular/core';
import {tmpdir} from 'os';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  // Variables
  private _titre = 'Ajouter des POKEMONS';
  // Chaque valeur est un tableau d'informations
  private _tabPokemons = [];
  // Nombre de Pokémons mais aussi le idPokemon
  private _nbPokemon = 0;
  // Nombre de Pokemon total (22/01/2020 - avec Génération 8)
  private NB_POKEMON = 890;
  // Pokemon préféré (0:id, 1:img, 2:nom, 3:géné, 4:type1, 5:type2, 6:taille, 7:poids)
  private _tabMonPrefered = [];
  private _monPokemonPrefered = 'aucun';
  // Caractéristiques des Pokémons
  private _imgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private _nomPokemon: string;
  private _genPokemon: number;
  private _typePokemon1: string;
  private _typePokemon2: string;
  private _taillePokemon: number;
  private _poidsPokemon: number;

  // Constructeur
  constructor() {
    this._nomPokemon = 'Pokémon';
    this._typePokemon1 = 'Normal';
    this._typePokemon2 = 'Vol';
    this._taillePokemon = 0.7;
    this._poidsPokemon = 22;
    this._tabMonPrefered = null;
  }

  // Méthodes

  // Ajouter un Pokemon
  ajouterPokemon() {
    // Caractéristiques des Pokemon
    this._nbPokemon++;
    this._genPokemon = Math.floor(Math.random() * 8) + 1;
    const tmpNom = this._nomPokemon + this._nbPokemon;
    // Image des différents Pokemons
    const imagePokemon = this._imgPokemon + this._nbPokemon.toString() + '.png';
    // Ajout des Pokemons (0:id, 1:img, 2:nom, 3:géné, 4:type1, 5:type2, 6:taille, 7:poids)
    const tabNewPokemon =
      [this._nbPokemon, imagePokemon, tmpNom, 'Génération : '
      + this._genPokemon, 'Type 1 : '
      + this._typePokemon1, 'Type 2 : '
      + this._typePokemon2, 'Taille : '
      + this._taillePokemon + 'm', 'Poids : '
      + this._poidsPokemon + 'kg'];
    this._tabPokemons.push(tabNewPokemon);
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
    if (this._tabMonPrefered == null) {
      this._tabMonPrefered = this._tabPokemons[valeur - 1];
      this._monPokemonPrefered = this._tabMonPrefered[2];
    } else if (this._tabMonPrefered[2] == this._tabPokemons[valeur - 1][2]) {
      alert("C'est déjà votre Pokémon préféré !");
    } else {
      alert("Veuillez d'abord supprimer votre Pokémon préféré : "
        + this._tabMonPrefered[2]
        + "\npour le changer par celui-ci : "
        + this._tabPokemons[valeur - 1][2] + " !\n\nMerci.");
    }
  }

  // Enlever le Pokemon préféré
  enleverPokemonPrefered() {
    this._tabMonPrefered = null;
    this._monPokemonPrefered = 'aucun';
  }

  ngOnInit() {
  }
}
