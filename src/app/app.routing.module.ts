import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent }  from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';
import { AccueilComponent } from "app/accueil.component";
import { AccueilService } from "app/accueil.service";


const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: 'accueil', component: AccueilComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
          ],
  exports: [
    RouterModule
  ],
  providers: [
    AccueilService
  ]
})
export class AppRoutingModule { }

