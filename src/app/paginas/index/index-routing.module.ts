import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexGuard } from '../../guardias/index.guard';
import { IndexPage } from './index.page';

const routes: Routes = [
	{
	  	path: '',
	  	component: IndexPage,
	  	canActivate: [IndexGuard],
	  	children: [
			{
		  		path: '',
		  		loadChildren: () => import('../../paginas/bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
		  	},
		  	{
		  		path: 'login',
		  		loadChildren: () => import('../../paginas/login/login.module').then(m => m.LoginPageModule)
		  	},
		  	{
		  		path: 'registro',
		  		loadChildren: () => import('../../paginas/registro/registro.module').then(m => m.RegistroPageModule)
		  	}
	  	]
	}
];
   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class IndexPageRoutingModule {}
