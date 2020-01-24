import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonsService} from "../services/-pokemons.service";

@Component({
  selector: 'app-unpokemon',
  templateUrl: './unpokemon.component.html',
  styleUrls: ['./unpokemon.component.css']
})
export class UnpokemonComponent implements OnInit {

  // Input pour le .html de ce composant et la référence element
  @Input() element; // de PokemonsComponent
  // @Output() clicSurImage = new EventEmitter();

  // Constructeur appelant les services ------------
  constructor(private monService: PokemonsService) {
  }

  // Encapsulation des méthodes des services pour la transparence
  // Mettre à jour le Pokemon préféré
  majPokemonPrefered(valeur) {
    this.monService.majPokemonPrefered(valeur);
  }

  // Phase d'initialisation de ce composant obligatoire
  ngOnInit() {
  }

}
