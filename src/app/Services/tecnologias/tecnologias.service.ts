import { Injectable } from '@angular/core';
import { Tecnologias } from '../../Models/Tecnologia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  constructor(private http:HttpClient) { }
  tecnologias="TecnologiasControllers";
  public getTecnologias():Observable<Tecnologias[]>{
    return this.http.get<Tecnologias[]>(`${environment.apiUrl}/${this.tecnologias}`);}
}
