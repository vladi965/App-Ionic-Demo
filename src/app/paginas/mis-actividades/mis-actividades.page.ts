import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/servicios/sesiones.service';

@Component({
  selector: 'app-mis-actividades',
  templateUrl: './mis-actividades.page.html',
  styleUrls: ['./mis-actividades.page.scss'],
})
export class MisActividadesPage implements OnInit {


	//sesiones =  [];
	token: any ;
	public isAddOpen = false;
	public data = {
		titulo: ''
	};
		
	constructor(private sesionesService: SesionesService) { }

	ngOnInit() {
		this.token = localStorage.getItem("token");
		this.getSesiones();
	}

	getSesiones() {

		if(this.token){

			var postData = { };

			this.sesionesService.listarSesiones(postData).subscribe(
				
				(res: any) => {
					var sesiones = res.sesiones;
					this.sesionesService.cambiarSesionesData(sesiones);
				},
				(error: any) => {
					console.log('Conexión perdida.');
				}
			);
		}
		else{
			console.log("cargando");
		}
	}


	sesionesUpdateAction(){

		this.sesionesService.agregarSesion(this.data).subscribe((res: any) => {

			this.sesionesService.actualizarSesionesData(res);
			this.isAddOpen = false;
			this.data.titulo="";
		});
	}
	 
}
