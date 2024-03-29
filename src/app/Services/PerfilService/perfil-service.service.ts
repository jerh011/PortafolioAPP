import { Injectable } from '@angular/core';
import { Perfil } from '../../Models/Perfil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilServiceService {
  url='PortafolioControllers';
  perfilJ="65f8eee9b0627135ba869efb"
  constructor(private http: HttpClient) { }

  public getPerfil():Observable<Perfil[]>{
    return this.http.get<Perfil[]>(`${environment.apiUrl}/${this.url}`);}
    
  public getPerfilID():Observable<Perfil>{
    return this.http.get<Perfil>(`${environment.apiUrl}/${this.url}/${this.perfilJ}`);}
}

