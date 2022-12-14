import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PeliculasModule } from './modulos/peliculas/peliculas.module';
import { FormsModule } from '@angular/forms';

import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    NavComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeliculasModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
  ],


  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
