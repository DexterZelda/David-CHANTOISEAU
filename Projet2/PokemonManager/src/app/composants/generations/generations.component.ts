import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  // Variables
  private unAttribut = "Générations de POKEMONS";
  private tabPokemons = [];
  private compteur = 0;
  private nbPokemon = 0;

  // Constructeur
  constructor() { }

  // Méthodes
  ajouterPlusUn() {
    this.compteur++;
    console.log(this.compteur);
  }

  resetCompteur() {
    this.compteur = 0;
  }

  ajouterPokemon() {
    this.nbPokemon++;
    let tmpNom = "";
    let num = this.nbPokemon+this.nbPokemon+1;
    tmpNom += "Pokemon"+num.toString();
    this.tabPokemons.push(tmpNom);
  }

  enleverPokemon() {
    this.tabPokemons.pop();
    this.nbPokemon--;
  }

  ngOnInit() { }
}
