import { AsignaturasService } from './../../services/asignaturas.service';
import { Component, OnInit } from '@angular/core';
import { InterfazAsignatura } from 'src/app/utils/InterfazAsignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css'],
})
export class AsignaturasComponent implements OnInit {
  asignaturas: InterfazAsignatura[] = [];
  asignaturasFiltradas: InterfazAsignatura[] = [];

  constructor(private servicioAsig: AsignaturasService) {}

  ngOnInit(): void {
    this.asignaturas = this.servicioAsig.getAllAsignaturas();
  }
  buscarAsignatura(nom: string, ciclo: string, conocimiento: string) {
    this.asignaturas = this.servicioAsig.getAsignaturasFiltradas(
      nom,
      ciclo,
      conocimiento
    );
  }
}
