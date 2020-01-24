import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

// MAJ des imports ---------------------
import {LOCALE_ID} from "@angular/core";
import {registerLocaleData} from "@angular/common";
import LocaleFR from "@angular/common/locales/fr";
import { UnpokemonComponent } from './composants/unpokemon/unpokemon.component';
registerLocaleData(LocaleFR);


@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    UnpokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
