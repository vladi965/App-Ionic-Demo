import { Component, OnInit, Renderer2 } from '@angular/core';

import { ObjetivosService } from 'src/app/servicios/objetivos.service';
import { AlertService } from 'src/app/servicios/alert.service';
 
import * as $ from 'jquery';
import "../../../assets/plugins/knob/jquery.knob.js";
import { HttpService } from 'src/app/servicios/http.service.js';


@Component({
  	selector: 'app-objetivos',
	templateUrl: './objetivos.component.html',
	styleUrls: ['./objetivos.component.scss'],
})
export class ObjetivosComponent implements OnInit {

	objetivosData: any;
 
	constructor(private objetivosService: ObjetivosService, private alert: AlertService, renderer: Renderer2) { }

	ngOnInit() {
		this.objetivosService.objetivosData$.subscribe((res: any) => {
			this.objetivosData = res;
			console.log(this.objetivosData);
		});
	}

	ngAfterViewChecked(){
		
		var auxObjetivosService = this.objetivosService;

		$(".dial").knob({
			'min':0,
			'max':100,
			'angleArc':180,
			'angleOffset':-90,
			'release': function(valor) {

				var input = this.$.closest("input");

				if (33 > valor && valor >= 0){ // Rojo
					
					var color = "#ef5350";
					
					$("#card"+input.data("index")).removeClass("verde-claro");
					$("#card"+input.data("index")).removeClass("ambar-claro");
					$("#card"+input.data("index")).removeClass("gris-claro");
					$("#card"+input.data("index")).addClass("rojo-claro");
				}

				if (66 > valor && valor >= 33){ // Ambar
					
					var color = "#ffb22b";

					$("#card"+input.data("index")).removeClass("rojo-claro");
					$("#card"+input.data("index")).removeClass("verde-claro");
					$("#card"+input.data("index")).removeClass("gris-claro");
					$("#card"+input.data("index")).addClass("ambar-claro");
				}

				if (100 >= valor && valor >= 66){ // Verde
					
					var color = "#0e892a";

					$("#card"+input.data("index")).removeClass("rojo-claro");
					$("#card"+input.data("index")).removeClass("ambar-claro");
					$("#card"+input.data("index")).removeClass("gris-claro");
					$("#card"+input.data("index")).addClass("verde-claro");
				}

				// Cambio de color en el scroll
				this.o.fgColor = color;
				input.css("color", color);

				// Enviar la data al servidor
				var postAvance = {id: input.data("id-objetivo"), avance: valor}
				auxObjetivosService.actualizarAvanceObjetivo(postAvance).subscribe((res: any) => {

				});
			},

		}).children().off('mousewheel DOMMouseScroll');
	}

	eliminarObjetivo(idObjetivo: any, indexObjetivo: any){

		var postData = {id: idObjetivo}

		this.alert.presentAlertConfirm('Borrar objetivo', '¿Estás seguro de eliminar el objetivo?').then((res: any) => {

			// Eliminar el Objetivo
			if(res.role == "ok"){
				this.objetivosService.eliminarObjetivo(postData).subscribe((res: any) => {
					if(res.success){
						this.objetivosService.elimimarObjetivosData(indexObjetivo);
					}
				});
			}
		});
	}
}
