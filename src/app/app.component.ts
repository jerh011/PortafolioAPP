import { Component } from '@angular/core';
import { Perfil } from './Models/Perfil';
import { PerfilServiceService } from './Services/PerfilService/perfil-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Portafolio';
  perfil = new Perfil();
  

  constructor(private perfilServiceService: PerfilServiceService){}

  ngOnInit():void{
    this.perfilServiceService.getPerfilID().subscribe((result: Perfil) => (this.perfil=result));
  }
  

  
  
}
