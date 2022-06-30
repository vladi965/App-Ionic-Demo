import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/servicios/sesiones.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sesiones',
	templateUrl: './sesiones.component.html',
	styleUrls: ['./sesiones.component.scss'],
})

export class SesionesComponent implements OnInit {

	sesionesData: any;

	postData = {
		idObjetivo: '',
		indexObjetivo: ''
	}

  	constructor(private objetivosService: SesionesService, private router: Router) { }

  	ngOnInit() {
      	this.objetivosService.bitacoraData$.subscribe((res: any) => {
          	this.sesionesData = res;
      	}); 
  	}

	navigateToVerDetalles(idSesion: any) {
        this.router.navigate(['/sesion/' + idSesion]);
    }

}
