import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/servicios/toast.service';
import { AuthService } from './../../servicios/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	postData = {
		username: '',
		password: ''
	};

	constructor(
		private router: Router,
		private authService: AuthService,
		private toastService: ToastService
	) {}


	ngOnInit() {
	}

  	validateInputs() {
	
		let username = this.postData.username.trim();
		let password = this.postData.password.trim();

		return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0);
	}

	loginAction() {

		if (this.validateInputs()) {

			this.authService.login(this.postData).subscribe(
				
				(res: any) => {
				
					if (res.token) {
						localStorage.setItem("token",res.token);
						this.router.navigate(['home/assessments']);
					} else {
						this.toastService.presentToast('Incorrect usuario or password');
					}
				},
				(error: any) => {
					this.toastService.presentToast('Contraseña Incorrecta')
				}
			);
			
		} else {
			this.toastService.presentToast('Porfavor ingrese su Correo Electrónico o contraseña');
		}
	}

}
