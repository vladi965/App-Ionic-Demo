import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { DetSesionComponent } from './det-sesion/det-sesion.component';

 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ObjetivosComponent,
    SesionesComponent,
    DetSesionComponent
  ],
  exports:[
    ObjetivosComponent,
    SesionesComponent,
    DetSesionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentesModule { }
 
 
