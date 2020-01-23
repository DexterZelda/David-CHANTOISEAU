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
  private _tabPokemons = [];
  private _nbPokemon = 0;
  // Nombre de Pokemon total (22/01/2020 - avec Génération 8)
  private NB_POKEMON = 890;
  private _monPokemonPrefered = 'aucun';

  // Constructeur
  constructor() {
  }

  // Méthodes

  // Ajouter un Pokemon
  ajouterPokemon() {
    // Caractéristiques des Pokemon
    this._nbPokemon++;
    const tmpNom = 'Pokemon ' + this._nbPokemon.toString();
    // Image des différents Pokemons
    const imagePokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
      + this._nbPokemon.toString() + '.png';
    // Ajout des Pokemons
    const tabNewPokemon =
      [imagePokemon, tmpNom, 'Génération x', ' Catégorie : graine', ' Type : feu', ' Taille : 0.7 m', ' Poids : 22 kg'];
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
    this._monPokemonPrefered = 'aucun';
  }

  // Mettre à jour le Pokemon préféré
  majPokemonPrefered(valeur) {
    this._monPokemonPrefered = valeur;
  }

  ngOnInit() {
  }
}
