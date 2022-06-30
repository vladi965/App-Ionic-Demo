import { Component, OnInit } from '@angular/core';


//import { AlertService } from 'src/app/servicios/alert.service';
import { ObjetivosService } from 'src/app/servicios/objetivos.service';


@Component({
	selector: 'app-mis-objetivos',
  	templateUrl: './mis-objetivos.page.html',
  	styleUrls: ['./mis-objetivos.page.scss'],
})
export class MisObjetivosPage implements OnInit {

	token: any ;
	public isAddOpen = false;
	public data = {
		detalle: ''
	};
  
	constructor(private objetivosService: ObjetivosService) { }
  
	ngOnInit() {
		this.token = localStorage.getItem("token");
		this.getObjetivos();
	}

	getObjetivos() {
 
		if(this.token){
  
			var postData = { };
  
			this.objetivosService.listarObjetivos(postData).subscribe(
			   
				(res: any) => {
   
					// Mis Objetivos
					this.objetivosService.cambiarObjetivosData(res.objetivos);
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


	objetivosUpdateAction(){
 
		this.objetivosService.agregarObjetivo(this.data).subscribe((res: any) => {
			this.objetivosService.actualizarObjetivosData(res);
			this.isAddOpen = false;
			this.data.detalle="";
		});
	}
  
 
 

}
