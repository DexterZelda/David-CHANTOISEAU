import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})

export class GenerationsComponent implements OnInit {

  // Variables
  private _titre = 'Générations de POKEMONS';
  private  _tabGenerations = ['Génération I', 'Génération II', 'Génération II', 'Génération IV',
    'Génération V', 'Génération VI', 'Génération VII', 'Génération VIII'];
  private _date = new Date();

  // Constructeur
  constructor() { }

  // Méthodes

  ngOnInit() { }
}
