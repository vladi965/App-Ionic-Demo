import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})


export class IndexGuard implements CanActivate {

	constructor(public router: Router) { }

	canActivate(): Promise<boolean> {
      
       return new Promise(resolve => {
 
           const token = localStorage.getItem("token");
          
           if (token) {
               console.log("Guardia Index: Si está logeado, redirige al /home");
			   this.router.navigate(['home']);
               resolve(false);
           }
           else {
               console.log("Guardia Index: No esta logeado");
               resolve(true);
           }
       });
   }
}
