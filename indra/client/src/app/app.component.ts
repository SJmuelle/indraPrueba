import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: String | undefined;
  email: String | undefined;
  phone: String | undefined;
  pais: String | undefined;



  constructor(private _service: DataService) { }

  ngOnInit() {

  }
  registrar() {

    if (
      (this.nombre == undefined) || (this.nombre == null)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campo incorrecto...',
        text: 'Favor Verifique el campo nombre',
      })
    }
    else if (
      (this.pais == undefined) || (this.pais == null)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campo incorrecto...',
        text: 'Favor Verifique el campo Pais',
      })
    }
    else if (
      (this.phone == undefined) || (this.phone == null)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campo incorrecto...',
        text: 'Favor Verifique el campo Telefono',
      })
    }
    else if (
      (this.email == undefined) || (this.email == null)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campo incorrecto...',
        text: 'Favor Verifique el campo Email',
      })
    } else {
      var data = {
        "nombre": this.nombre,
        "pais": this.pais,
        "celular": this.phone,
        "email": this.email
      }
      var res = this._service.saveUsuario(data).subscribe((value: any) => {
        if (value['codigo'] == 0) {
          Swal.fire(
            'Completado',
            value['text'],
            'success'
          )
        } else {
          Swal.fire(
            'Informacion',
            'Hubo Fallos en la Ejecucion del Proceso, Intente Nuevamente',
            'info'
          )
        }
      })

    }

  }
}
