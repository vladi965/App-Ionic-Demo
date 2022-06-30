import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisAssessmentsPage } from './mis-assessments.page';

const routes: Routes = [
  {
    path: '',
    component: MisAssessmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisAssessmentsPageRoutingModule {}
