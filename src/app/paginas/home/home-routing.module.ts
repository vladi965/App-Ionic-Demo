import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from '../../guardias/home.guard';
import { HomePage } from './home.page';

const routes: Routes = [
	{
	  	path: 'home',
	  	component: HomePage,
	  	canActivate: [HomeGuard],
	  	children: [
			{
				path: 'assessments',
				loadChildren: () => import('../../paginas/mis-assessments/mis-assessments.module').then(m => m.MisAssessmentsPageModule)
			},
			{
				path: 'objetivos',
				loadChildren: () => import('../../paginas/mis-objetivos/mis-objetivos.module').then(m => m.MisObjetivosPageModule)
			},
			{
				path: 'actividades',
				loadChildren: () => import('../../paginas/mis-actividades/mis-actividades.module').then(m => m.MisActividadesPageModule)
			},
			{
				path: '',
				redirectTo: '/home/assessments',
				pathMatch: 'full'
			}
		]
	 
	}
];
   
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
