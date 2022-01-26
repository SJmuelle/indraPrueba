import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public num1: number | undefined;
  public num2: number | undefined;
  public listado:any =[];


  constructor(private _service: DataService) { }

  ngOnInit() {
    this.consulta();
  }

  private consulta(){
    this._service.getMultiplicacion().subscribe((value: any) => {
      this.listado=value;
    })
  }
  public deleteReg(id:Number){
    this._service.deleteMultiplicacion(id).subscribe((value: any) => {
      if (value['codigo'] == 0) {
        Swal.fire(
          'Completado',
          value['text'],
          'success'
        )
        this.consulta();
      } else {
        Swal.fire(
          'Informacion',
          'Hubo Fallos en la Ejecucion del Proceso, Intente Nuevamente',
          'info'
        )
      }
    })
  }
  public registrar() {

    if (
      (this.num1 == undefined) || (this.num2 == null)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campo incorrecto...',
        text: 'Favor Verifique el campo nombre',
      })
    }
    else if (
      (this.num2 == undefined) || (this.num2 == null)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campo incorrecto...',
        text: 'Favor Verifique el campo Pais',
      })
    }
    else {
      var data = {
        "num1": Number(this.num1),
        "num2": Number(this.num2),
      }
      var res = this._service.saveMultiplicacion(data).subscribe((value: any) => {
        if (value['codigo'] == 0) {
          Swal.fire(
            'Completado',
            value['text'],
            'success'
          )
          this.consulta();
          this.num1=undefined;
          this.num2=undefined;
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
