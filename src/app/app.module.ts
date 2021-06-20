import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {FormsModule} from '@angular/forms';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ImgPipe } from './pipes/img.pipe';
import { BuscarunoComponent } from './components/buscaruno/buscaruno.component';
import { RouterModule, Routes } from '@angular/router';
import { UrlyoutubePipe } from './pipes/urlyoutube.pipe';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    BuscarComponent,
    TarjetasComponent,
    ImgPipe,
    BuscarunoComponent,
    UrlyoutubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
