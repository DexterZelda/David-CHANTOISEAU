import {Component, OnInit} from '@angular/core';
import {PokemonsService} from "../services/-pokemons.service";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})

/**** Classe composant générations ****/
export class GenerationsComponent implements OnInit {

  // Variables ------------------------------
  private _titre: string;
  private _tabGenerations = ['Génération I', 'Génération II', 'Génération II', 'Génération IV',
    'Génération V', 'Génération VI', 'Génération VII', 'Génération VIII'];
  private _date = new Date();

  // Constructeur appelant les services ------------
  constructor(private monService: PokemonsService) {
  }

  // Méthodes ------------------
  // Afficher dans le composant des Pokémons ceux de la génération concernée
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
      default : alert('PB de clic sur un bouton Génération !');
        break;
    }
  }

  // Phase d'initialisation de ce composant obligatoire
  ngOnInit() {
    this._titre = 'Générations de POKEMONS';
  }
}
