import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pasatiempos } from '../../Models/Pasatiempos';

@Injectable({
  providedIn: 'root'
})

export class PasatiemposServicesService {
  url='PasatiempoControllers';
  //perfilJ="65f8eee9b0627135ba869efb"
  constructor(private http: HttpClient) { }

  public getHobbi():Observable<Pasatiempos[]>{
    return this.http.get<Pasatiempos[]>(`${environment.apiUrl}/${this.url}`);}
  
}
