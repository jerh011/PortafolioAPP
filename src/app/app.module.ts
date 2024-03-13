import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponetComponent } from './Components/perfil-componet/pagina/perfil-componet.component';
import { HttpClientModule } from '@angular/common/http';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ConsumoDeAPIComponent } from './Components/consumo-de-api/consumo-de-api.component';
import { PokedexComponent } from './Components/carousel/pokedex/pokedex.component';
import { DestionDeTareaComponent } from './Components/carousel/destion-de-tarea/destion-de-tarea.component';
import { BibliotecaVirtualComponent } from './Components/carousel/biblioteca-virtual/biblioteca-virtual.component';
import { CalculadoraComponent } from './Components/carousel/calculadora/calculadora.component';
import { HobbiesComponent } from './Components/hobbies/hobbies.component'; //importar el modulo de http

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponetComponent,
    ProyectosComponent,
    ConsumoDeAPIComponent,
    PokedexComponent,
    DestionDeTareaComponent,
    BibliotecaVirtualComponent,
    CalculadoraComponent,
    HobbiesComponent
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
