import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FamilyComponent } from './components/family/family.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { MaterialModule } from './modules/material/material.module';
import { PageNotFoundComponent } from './pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleapiComponent } from './components/googleapi/googleapi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FamilyComponent,
    NavComponent,
    ContactComponent,
    PageNotFoundComponent,
    GoogleapiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
