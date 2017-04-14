import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComposeMessageComponent } from "app/compose-message.component";
import { AppRoutingModule } from "app/app.routing.module";
import { PageNotFoundComponent } from "app/not-found.component";
import { Router } from '@angular/router';
import { AccueilComponent } from "app/accueil.component";
import { AccueilChildComponent } from "app/accueil-child.component";
import { AdminModule } from "app/admin/admin.module";

// bibliothèques externes
import { ChartModule, OverlayPanelModule } from 'primeng/primeng';
import { MaterialModule } from '@angular/material';
import { NgSemanticModule } from 'ng-semantic';


//services
import { AccueilService } from "app/accueil.service";
import { LoginRoutingModule } from "app/login-routing.module";
import { LoginComponent } from "app/login.component";






@NgModule({
  declarations: [
    LoginComponent,AccueilChildComponent, AccueilComponent,AppComponent,ComposeMessageComponent,PageNotFoundComponent
  ],
  imports: [
    OverlayPanelModule,NgSemanticModule,MaterialModule,ChartModule,BrowserModule,
    FormsModule, HttpModule, LoginRoutingModule,AdminModule,AppRoutingModule
  ],
  providers: [AccueilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

