import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisObjetivosPageRoutingModule } from './mis-objetivos-routing.module';

import { MisObjetivosPage } from './mis-objetivos.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisObjetivosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MisObjetivosPage]
})
export class MisObjetivosPageModule {}
