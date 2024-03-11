import { Component } from '@angular/core';
import { Perfil } from '../../../Models/Perfil';
import { PerfilServiceService } from '../../../Services/perfil-service.service';

@Component({
  selector: 'app-perfil-componet',
  templateUrl: './perfil-componet.component.html',
  styleUrl: './perfil-componet.component.css'
})
export class PerfilComponetComponent {

  title = 'Portafolio';
  perfil = new Perfil();
  

  constructor(private perfilServiceService: PerfilServiceService){}

  ngOnInit():void{
    this.perfilServiceService.getPerfilID().subscribe((result: Perfil) => (this.perfil=result));
  }
  
}
