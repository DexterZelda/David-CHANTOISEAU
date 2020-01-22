import { Component, OnInit } from '@angular/core';
import {tmpdir} from "os";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  // Variables
  private _titre = "Ajouter des POKEMONS";
  private _tabPokemons = [];
  private _nbPokemon = 0;

  // Constructeur
  constructor() { }

  // Méthodes
  ajouterPokemon() {
    this._nbPokemon++;
    let tmpNom = "";
    tmpNom += "Pokemon "+this._nbPokemon.toString();
    let tabNewPokemon = [tmpNom,"Catégorie","Type","Taille","Poid"];
    this._tabPokemons.push(tabNewPokemon);
  }

  enleverPokemon() {
    this._tabPokemons.pop();
    this._nbPokemon--;
  }

  ngOnInit() { }
}
