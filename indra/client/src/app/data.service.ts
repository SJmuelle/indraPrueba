import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  ruta = `${environment.urlApi}api/multiplicacion`;

  constructor(private Http: HttpClient) { }

  saveMultiplicacion(data: any) {
    return this.Http.post(`${this.ruta}`, data);
  }
  getMultiplicacion() {
    return this.Http.get(`${this.ruta}`);
  }
  deleteMultiplicacion(id:Number){
    return this.Http.delete(`${this.ruta}/${id}`);
  }

}
