import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  // Variables
  private _titre = "Ajouter des POKEMONS";
  private _tabPokemons = [];
  private _compteur = 0;
  private _nbPokemon = 0;

  // Constructeur
  constructor() { }

  // Méthodes
  ajouterPlusUn() {
    this._compteur++;
    console.log(this._compteur);
  }

  resetCompteur() {
    this._compteur = 0;
  }

  ajouterPokemon() {
    this._nbPokemon++;
    let tmpNom = "";
    tmpNom += "Pokemon"+this._nbPokemon.toString();
    this._tabPokemons.push(tmpNom);
  }

  enleverPokemon() {
    this._tabPokemons.pop();
    this._nbPokemon--;
  }

  ngOnInit() { }
}
