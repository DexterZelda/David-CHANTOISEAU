import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /*{
    path : '' CELA VA SE GREFFER SUR L'URL /(: pour paramétrer ex : id)
      route joker : **                    |   mettre joker a la fin
    component : (composant) NOM DU COMPOSANT
      route joker : choisir un composant  |
    children : [{path: '', component: }] TABLEAU DE ROUTE
    créer un champ dans le ts
    mettre private route dans constructeur ts
    ngOnInit -> this.route.snapshot.paramMap.get('id')
   }*/
  /*
  {
    path: ..., component: ...
    canActivate: [PokemonsService] à déclarer dans le composant xyz
      ouis dans le html : <a routerLink="\abc">
  }
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
