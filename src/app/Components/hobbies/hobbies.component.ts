import { Component } from '@angular/core';
import { Pasatiempos } from '../../Models/Pasatiempos';
import { PasatiemposServicesService } from '../../Services/PasatiemposService/pasatiempos-services.service';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {

  title = 'Portafolio';
 
  pasatiempos:Pasatiempos[]=[];
  

  constructor(private pasatiemposServicesService: PasatiemposServicesService){}

  ngOnInit():void{
    this.pasatiemposServicesService.getHobbi().subscribe((result: Pasatiempos[])=>(this.pasatiempos=result));
  }

  
}
