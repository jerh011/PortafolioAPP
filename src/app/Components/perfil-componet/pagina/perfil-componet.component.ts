import { Component } from '@angular/core';
import { Perfil } from '../../../Models/Perfil';
import { PerfilServiceService } from '../../../Services/PerfilService/perfil-service.service';
import { Tecnologias } from '../../../Models/Tecnologia';
import { TecnologiasService } from '../../../Services/tecnologias/tecnologias.service';

@Component({
  selector: 'app-perfil-componet',
  templateUrl: './perfil-componet.component.html',
  styleUrl: './perfil-componet.component.scss'
})
export class PerfilComponetComponent {

  title = 'Portafolio';
  perfil = new Perfil();
  tecnologias:Tecnologias[]=[];
  

  constructor(private perfilServiceService: PerfilServiceService, private tecnologiasService: TecnologiasService){}

  ngOnInit():void{
    this.perfilServiceService.getPerfilID().subscribe((result: Perfil) => (this.perfil=result));
    this.tecnologiasService.getTecnologias().subscribe((result: Tecnologias[])=>(this.tecnologias=result));
  }

  
}
