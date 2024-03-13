import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponetComponent } from './Components/perfil-componet/pagina/perfil-componet.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ConsumoDeAPIComponent } from './Components/consumo-de-api/consumo-de-api.component';
import { HobbiesComponent } from './Components/hobbies/hobbies.component';
const routes: Routes = [

{
  path:'',
  component:PerfilComponetComponent
},
{
  path:'Perfil',
  component:PerfilComponetComponent
},
{
  path:'Proyectos',
  component:ProyectosComponent
},
{
  path:'ConsumoDeApi',
  component:ConsumoDeAPIComponent
},
{
  path:'Pasatiempo',
  component:HobbiesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
