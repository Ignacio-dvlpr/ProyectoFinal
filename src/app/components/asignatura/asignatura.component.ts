import { InterfazAsignatura } from 'src/app/utils/InterfazAsignatura';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css'],
})
export class AsignaturaComponent implements OnInit {
  //@Input() asignatura: InterfazAsignatura;

  constructor() {}

  ngOnInit(): void {}
}
