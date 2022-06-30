import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionesService } from 'src/app/servicios/sesiones.service';
import { AlertService } from 'src/app/servicios/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

	token: any ;

	public tituloSesion;

	idSesion: any;

  	constructor( private router: Router, private alert: AlertService, private activatedRouter: ActivatedRoute, private sesionesService: SesionesService) { }

	ngOnInit() {
		
		this.token = localStorage.getItem("token");

		this.activatedRouter.paramMap.subscribe(paramMap =>{
			this.idSesion = paramMap.get("idSesion");
			this.getSesion(this.idSesion);
		})
		
 	}

  	ionViewWillEnter(){
    	let chatSeccion = document.getElementById("chat");
    	chatSeccion.scrollTop = chatSeccion.scrollHeight;
  	}

	getSesion(idSesion: any) {

		if(this.token){

			var postData = {"id": idSesion};

			this.sesionesService.verSesion(postData).subscribe(
				
				(res: any) => {
					this.tituloSesion = res.titulo;
					this.sesionesService.cambiarMensajesData(res.mensajes);
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

	eliminarSesion(){
		
		this.alert.presentAlertConfirm('Borrar sesión', '¿Estás seguro de eliminar la sesión?').then((res: any) => {

			// Eliminar el Objetivo
			if(res.role == "ok"){

				var postData = {id: this.idSesion}

				this.sesionesService.eliminarMensajeSesion(postData).subscribe((res: any) => {
					if(res.success){

						this.sesionesService.actualizarSesiones2Data(this.idSesion);

						this.router.routeReuseStrategy.shouldReuseRoute = () => false;
						this.router.onSameUrlNavigation = 'reload';
						this.router.navigate(['/home/actividades'], {queryParams: {"search": "1"}});

						
						
						//this.router.routeReuseStrategy.shouldReuseRoute = function () {
						//	return false;
						//}
	
						//this.router.onSameUrlNavigation = 'reload';
						//this.router.navigate(['/home/actividades'])
					}
				});
			}
		});
	}

	EditarSesion(){
		
		this.alert.presentEditSesion('Editar sesión', '¿Estás seguro de editar el nombre de la sesión?').then((res: any) => {
			if(res.role == "ok"){
			}
		});
	}

}
