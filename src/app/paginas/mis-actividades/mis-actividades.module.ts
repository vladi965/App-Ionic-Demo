import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisActividadesPageRoutingModule } from './mis-actividades-routing.module';

import { MisActividadesPage } from './mis-actividades.page';

import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisActividadesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MisActividadesPage]
})
export class MisActividadesPageModule {}
