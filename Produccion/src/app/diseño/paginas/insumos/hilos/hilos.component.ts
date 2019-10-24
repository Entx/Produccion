import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-hilos',
  templateUrl: './hilos.component.html',
  styleUrls: ['./hilos.component.scss']
})
export class HilosComponent implements OnInit  {
  respuesta: any[]
  table_header: any


  constructor(private http: HttpClient) { }

  ngOnInit() {
  

    // this.getDataProductos()
    this.getData()
    this.table_header = [
      {
        id: 'N°',
        nombre : 'Nombre',
        materialhilos: 'Material',
        tipo: 'Tipo ',
        colorhilos: 'Color Hilos',
        proveedor: 'Proveedor',
      }
    ]
  }
 
  
  respuestaProductos:any[]

  // getDataProductos=()=>{
  //   let tabla = 'telas'
  //   this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
  //   .subscribe(data => {
  //     this.respuestaProductos = data.datos
  // })
  // }
 


  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }
  getData = () => {
    let tabla = 'hilos'
    this.http.get<any>(environment.API_URL + `hilosAPI?tabla=${this.getLocalStorage()}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }
  }

