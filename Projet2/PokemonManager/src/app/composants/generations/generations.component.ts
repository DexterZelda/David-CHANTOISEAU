import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  // Variables
  private unAttribut = "Générations de POKEMONS";
  private test = null;
  private tabElements =  ["Pokemon1","Pokemon2","Pokemon3","Pokemon4"];
  private compteur = 0;
  private nbPokemon = this.tabElements.length;

  // Constructeur
  constructor() { }

  // Méthodes
  ajouterPlusUn() {
    this.compteur++;
    console.log(this.compteur);
  }

  ajouterPokemon() {
    let tmpNom = "Pokemon"+this.nbPokemon.toString()+1;
    this.tabElements.push(tmpNom);
  }

  enleverPokemon() {
    this.tabElements.pop();
  }

  ngOnInit() {
  }

}
