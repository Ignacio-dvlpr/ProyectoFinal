import { InterfazAsignatura } from './../../utils/InterfazAsignatura';
import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosService } from './../../services/ciclos.service';
import { Component, OnInit } from '@angular/core';
import { InterfazCiclo } from 'src/app/utils/InterfazCiclo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css'],
})
export class CiclosComponent implements OnInit {
  ciclos: InterfazCiclo[] = [];
  allAsignaturas: InterfazAsignatura[] = [];
  asignaturasDam: InterfazAsignatura[] = [];
  asignaturasDaw: InterfazAsignatura[] = [];

  constructor(
    private servicioCiclos: CiclosService,
    private servicioAsignaturas: AsignaturasService,
    private rutas: Router
  ) {}

  ngOnInit(): void {
    this.ciclos = this.servicioCiclos.getAllCiclos();
    this.allAsignaturas = this.servicioAsignaturas.getAllAsignaturas();
    this.asignaturasDam = this.servicioAsignaturas.getAsignaturasDam();
    this.asignaturasDaw = this.servicioAsignaturas.getAsignaturasDaw();
  }

  pasarDatos(comp: string, curso: any, nombre: any) {
    this.rutas.navigate([comp, curso, nombre]);
  }
}
