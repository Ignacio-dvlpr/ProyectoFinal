import { element } from 'protractor';
import { AsignaturasService } from './../../services/asignaturas.service';
import { InterfazCiclo } from './../../utils/InterfazCiclo';
import { InterfazAsignatura } from './../../utils/InterfazAsignatura';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiclosService } from 'src/app/services/ciclos.service';

@Component({
  selector: 'app-detalleciclo',
  templateUrl: './detalleciclo.component.html',
  styleUrls: ['./detalleciclo.component.css'],
})
export class DetallecicloComponent implements OnInit {
  asignaturasDetalle: InterfazAsignatura[] = [];
  cursoDetalle: InterfazCiclo[] = [];
  cursoDetalleFiltro: InterfazCiclo[] = [];
  conocimientos: any[] = [];
  curso: number = 0;
  nombre: string = '';
  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioAsig: AsignaturasService,
    private servicioCiclo: CiclosService
  ) {}

  ngOnInit(): void {
    this.curso = this.rutaActiva.snapshot.params.curso;
    this.nombre = this.rutaActiva.snapshot.params.nombre;
    this.cursoDetalle = this.servicioCiclo.getAllCiclos();
    this.cursoDetalle.forEach((element) => {
      if (element.nombre == this.nombre && element.curso == this.curso) {
        this.cursoDetalleFiltro.push(element);
      }
    });
    if (this.curso == 1) {
      this.asignaturasDetalle = this.servicioAsig.getAsignaturas1();
      this.asignaturasDetalle.forEach((element) => {
        element.conocimientos.forEach((element2) => {
          this.conocimientos.push(element2);
        });
      });
    } else if (this.curso == 2 && this.nombre.includes('DAM')) {
      this.asignaturasDetalle = this.servicioAsig.getAsignaturasDam2();
      this.asignaturasDetalle.forEach((element) => {
        element.conocimientos.forEach((element2) => {
          this.conocimientos.push(element2);
        });
      });
    } else if (this.curso == 2 && this.nombre.includes('DAW')) {
      this.asignaturasDetalle = this.servicioAsig.getAsignaturasDaw2();
      this.asignaturasDetalle.forEach((element) => {
        element.conocimientos.forEach((element2) => {
          this.conocimientos.push(element2);
        });
      });
    }
  }
}
