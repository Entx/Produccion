import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  respuesta: any[]
  table_header: any


  constructor(private http: HttpClient) { }

  ngOnInit() {
  

    this.getDataProductos()
    this.getData()
    this.table_header = [
      {
        id: 'N°',
        nombretela : 'Nombre',
        textura: 'Textura',
        colortela: 'Color tela',
        diseno: 'Diseño Tela',
        idmaterialtela: 'Material Tela',
        idproveedor: 'Proveedor'
      }
    ]
  }
 
  
  respuestaProductos:any[]

  getDataProductos=()=>{
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
      this.respuestaProductos = data.datos
  })
  }
 


  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }
  getData = () => {
    let tabla = 'telas'
    this.http.get<any>(environment.API_URL + `telasAPI?tabla=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

}

