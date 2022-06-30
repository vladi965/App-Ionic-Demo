import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAssessmentsPageRoutingModule } from './mis-assessments-routing.module';

import { MisAssessmentsPage } from './mis-assessments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAssessmentsPageRoutingModule
  ],
  declarations: [MisAssessmentsPage]
})
export class MisAssessmentsPageModule {}
