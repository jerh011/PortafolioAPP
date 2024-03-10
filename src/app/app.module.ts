import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponetComponent } from './Components/perfil-componet/pagina/perfil-componet.component';
import { HttpClientModule } from '@angular/common/http'; //importar el modulo de http

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
