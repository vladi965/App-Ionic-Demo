import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class HomeGuard implements CanActivate {

	constructor(public router: Router) { }

	canActivate(): Promise<boolean> {
      
       return new Promise(resolve => {
 
           const token = localStorage.getItem("token");
          
           if (token) {
               console.log("Guardia Home: Sí esta logeado");
               resolve(true);
           }
           else {
               console.log("Guardia Home: No está logeado");
               this.router.navigate(['']);
               resolve(false);
           }
       });
   }
}
