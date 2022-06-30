import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/servicios/sesiones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-det-sesion',
  templateUrl: './det-sesion.component.html',
  styleUrls: ['./det-sesion.component.scss'],
})
export class DetSesionComponent implements OnInit {

  mensajesData: any;

	public data = {
		texto: '',
		idSesion: '',
		tipo: '',
	};

  	constructor(private sesionesService: SesionesService, private activatedRouter: ActivatedRoute,) { }

  	ngOnInit() {

    	this.sesionesService.mensajesData$.subscribe((res: any) => {
      		this.mensajesData = res;
  		});

		this.activatedRouter.paramMap.subscribe(paramMap =>{
			const idSesion = paramMap.get("idSesion");
			this.data.idSesion = idSesion;
		})
  	}

	mensajesUpdateAction(){

		this.data.tipo = "1";
		
		this.sesionesService.agregarMensajeSesion(this.data).subscribe((res: any) => {

			this.sesionesService.actualizarMensajesData(res);
			this.data.texto="";
		});
  	}

}
