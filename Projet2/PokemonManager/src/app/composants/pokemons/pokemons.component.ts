import {Component, OnInit} from '@angular/core';
import {PokemonsService} from "../services/-pokemons.service";
import {Pokemon} from "../classes/pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

/**** Classe composant pokemons ****/
export class PokemonsComponent implements OnInit {
  // Variables
  private _Pokemons = [];
  private _nbPok: number;
  private _titre: string;

  // Constructeur appelant les services ------------
  constructor(private monService: PokemonsService) {
  }

  // Méthodes -----------
  majTableauPokemons() {
    this._Pokemons = this.monService.getPokemons();
  }

  majNbPokemon() {
    this._nbPok = this.monService.getnbPokemon();
  }

  // Encapsulation des méthodes des services pour la transparence
  // Ajouter un Pokemon
  ajouterPokemon() {
    this.monService.ajouterPokemon();
    // Mise à jour
    this.majTableauPokemons();
    this.majNbPokemon();
  }

  // Enlever un Pokemon
  enleverPokemon() {
    this.monService.enleverPokemon();
    // Mise à jour
    this.majTableauPokemons();
    this.majNbPokemon();
  }

  // Ajouter tous les Pokemons en récursivité
  ajouterAllPokemon() {
    this.monService.ajouterAllPokemon();
    // Mise à jour
    this.majTableauPokemons();
    this.majNbPokemon();
  }

  // Enlever tous les Pokemons en récursivité
  enleverAllPokemon() {
    this.monService.enleverAllPokemon();
    // Mise à jour
    this.majTableauPokemons();
    this.majNbPokemon();
  }

  // Enlever le Pokemon préféré
  enleverPokemonPrefered() {
    this.monService.enleverPokemonPrefered();
  }

  // Phase d'initialisation de ce composant obligatoire
  ngOnInit() {
    this._titre = 'Ajouter des POKEMONS';
    this.monService._nbPokemon = 0;
    this._nbPok = this.monService._nbPokemon;
    this.monService.NB_POKEMON = 890;
    this.monService._imgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    this.monService._nomPokemon = 'Pokémon';
    this.monService._typePokemon1 = 'Normal';
    this.monService._typePokemon2 = 'Vol';
    this.monService._taillePokemon = 0.78;
    this.monService._poidsPokemon = 22;
    this.monService._pokemon = null;
    this.monService._textePokemonPrefered = 'aucun';
    this.monService._tabPokemons = [];
  }
}
