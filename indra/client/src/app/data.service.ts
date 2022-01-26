import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  ruta = 'http://localhost:3000/api/usuarios';

  constructor(private Http: HttpClient) { }

  saveUsuario(usuario: any) {
    return this.Http.post(`${this.ruta}`, usuario);
  }


}
