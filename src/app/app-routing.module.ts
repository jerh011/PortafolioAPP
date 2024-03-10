import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponetComponent } from './Components/perfil-componet/pagina/perfil-componet.component';
const routes: Routes = [
{
  path:'Perfil-ComponetComponent',
  component:PerfilComponetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
