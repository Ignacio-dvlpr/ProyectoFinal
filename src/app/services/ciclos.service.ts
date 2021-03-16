import { element } from 'protractor';
import { AsignaturasService } from './asignaturas.service';
import { InterfazAsignatura } from './../utils/InterfazAsignatura';
import { InterfazCiclo } from './../utils/InterfazCiclo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CiclosService {
  ciclos: InterfazCiclo[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ];

  constructor() {}
  getAllCiclos(): InterfazCiclo[] {
    return this.ciclos;
  }

  /*getAllAsignaturasCiclos() {
    this.asignaturas = this.servicioAsignaturas.getAllAsignaturas();
    this.ciclos.forEach(element => {
     this.asignaturas.forEach(element2 => {
       if(element.nombre.includes(element2.ciclo)){
         element.asignaturas = this.;
       }
       
     });
    });
  }*/
  /*getAsignaturas():InterfazAsignatura[]{
    return this.asignaturas;
  }
  setAsignaturas(asignatura:InterfazAsignatura[]){
    this.asignaturas=asignatura;
  }*/

  /*filtrarCiclo(curso:number,nombre:string){
    return this.ciclos.filter(e=>{
      return e.curso==curso && e.nombre==nombre;
    })
  }*/
}
