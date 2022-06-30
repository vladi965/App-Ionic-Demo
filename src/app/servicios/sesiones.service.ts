import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

	   	// Me Apoya con la lista de sesiones
	   	bitacoraData$ = new BehaviorSubject<any>([]);
 
	   	constructor(private httpService: HttpService) { }
	 
	   	cambiarSesionesData(data: any){
		   this.bitacoraData$.next(data);
	   	}
	 
	   	getActualSesionesData(){
		   return this.bitacoraData$.getValue();
	   	}
	 
	   	actualizarSesionesData(nuevoObjetivo: any){
	 
		   let data = [];
		   let actualObjetivosData = this.getActualSesionesData();
	 
		   data.push(nuevoObjetivo);
	 
		   let nuevosObjetivos = data.concat(actualObjetivosData);
		   this.cambiarSesionesData(nuevosObjetivos);
	   	}

		actualizarSesiones2Data(idEliminar: any){
			
			let data = [];
			let actualObjetivosData = this.getActualSesionesData();
			
			var posicion;
			for(var i = 0; i < actualObjetivosData.length ; i++){
				
				if( actualObjetivosData[i]["id"] + "" == idEliminar){
					console.log("entro igualdad");
					console.log(actualObjetivosData[i]["id"]);
					posicion = i;
				}
			}

			// Eliminar objetivo
			actualObjetivosData.splice(posicion, 1);
			
			this.cambiarSesionesData(actualObjetivosData);
			
		}
		
	 
	   	// Me apoya con la lista de mensajes de una sesion
	   	mensajesData$ = new BehaviorSubject<any>([]);
	  
	   	cambiarMensajesData(data: any){
		   this.mensajesData$.next(data);
	   	}
	 
	   	getActualMensajesData(){
		   return this.mensajesData$.getValue();
	   	}
	   	
		actualizarMensajesData(nuevoMensaje: any){
	 
		   let data = [];
		   let actualMensajeaData = this.getActualMensajesData();
	 
		   data.push(nuevoMensaje);
	 
		   //let nuevosMensajes = data.concat(actualMensajeaData);

		   let nuevosMensajes = actualMensajeaData.concat(data);

		   this.cambiarMensajesData(nuevosMensajes);
	   	}
	 
		// LLamadas a la API
		
		listarSesiones(postData: any): Observable<any> {
			return this.httpService.postAutenticado('api/ejecutivo/sesion/listar', postData);
		}
		
		agregarSesion(postData: any): Observable<any> {
			return this.httpService.postAutenticado('api/ejecutivo/sesion/agregar', postData);
		}
		
		verSesion(postData: any): Observable<any> {
			return this.httpService.postAutenticado('api/ejecutivo/sesion/ver', postData);
		}
		
		agregarMensajeSesion(postData: any): Observable<any> {
			return this.httpService.postAutenticado('api/ejecutivo/sesion/mensaje/agregar', postData);
		}

		eliminarMensajeSesion(postData: any): Observable<any> {
			return this.httpService.postAutenticado('api/ejecutivo/sesion/borrar', postData);
		}
	

}
