import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})

export class GenerationsComponent implements OnInit {

  // Variables
  private _titre = 'Générations de POKEMONS';
  private _tabGenerations = ['Génération I', 'Génération II', 'Génération II', 'Génération IV',
    'Génération V', 'Génération VI', 'Génération VII', 'Génération VIII'];
  private _date = new Date();

  // Constructeur
  constructor() {
  }

  // Méthodes
  affPokemonGeneration(valeur) {
    switch (valeur) {
      case 'Génération I' :
        break;
      case 'Génération II' :
        break;
      case 'Génération III' :
        break;
      case 'Génération IV' :
        break;
      case 'Génération V' :
        break;
      case 'Génération VI' :
        break;
      case 'Génération VII' :
        break;
      case 'Génération VIII' :
        break;
      default :
        break;
    }
  }

  ngOnInit() {
  }
}
