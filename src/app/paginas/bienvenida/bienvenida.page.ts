import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-bienvenida',
	templateUrl: './bienvenida.page.html',
	styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

	slideOpts = {
    	initialSlide: 0,
    	speed: 400
  	};

  	constructor(private router: Router) { }

	ngOnInit() {
		console.log("hola a todos");
	}

	irALogin(){
		this.router.navigate(['/login'])
	}

}
