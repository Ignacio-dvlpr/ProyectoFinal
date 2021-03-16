import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { TextosPipe } from './pipes/textos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    AsignaturasComponent,
    AsignaturaComponent,
    DetallecicloComponent,
    NavBarComponent,
    ImagenesPipe,
    TextosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
