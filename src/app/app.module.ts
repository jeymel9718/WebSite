import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CustommaterialModule } from './custommaterial/custommaterial.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';

import {ClientService} from './services/client.service';
import {SiteService} from './services/site.service';
import { RegSiteComponent } from './reg-site/reg-site.component';
import { ReservationsComponent } from './reservations/reservations.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegSiteComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustommaterialModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [ClientService,SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
