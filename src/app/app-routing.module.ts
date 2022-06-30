import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./paginas/index/index.module').then(m => m.IndexPageModule)
	},
	{
		path: '',
		loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
	},
	{
		path: 'sesion',
		children:[
			{
				path: ":idSesion",
				loadChildren: () => import('./paginas/sesion/sesion.module').then( m => m.SesionPageModule)
			}
    	]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  	],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
