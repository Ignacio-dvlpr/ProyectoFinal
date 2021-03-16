import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosComponent } from './components/ciclos/ciclos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ciclos', component: CiclosComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'detalleCiclo/:curso/:nombre', component: DetallecicloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
