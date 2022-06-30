import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {

	 
	objetivosData$ = new BehaviorSubject<any>([]);
 
	constructor(private httpService: HttpService) { }

	cambiarObjetivosData(data: any){
		this.objetivosData$.next(data);
	}

	getActualObjetivosData(){
		return this.objetivosData$.getValue();
	}

	elimimarObjetivosData(index: number){

		let data = [];
		let actualObjetivosData = this.getActualObjetivosData();

		actualObjetivosData.splice(index,1);
		let nuevosObjetivos = data.concat(actualObjetivosData);
		this.cambiarObjetivosData(nuevosObjetivos);
	}

	actualizarObjetivosData(nuevoObjetivo: any){

		let data = [];
		let actualObjetivosData = this.getActualObjetivosData();

		data.push(nuevoObjetivo);

		let nuevosObjetivos = data.concat(actualObjetivosData);
		this.cambiarObjetivosData(nuevosObjetivos);
	}

	// LLamadas a la API

	listarObjetivos(postData: any): Observable<any> {
		return this.httpService.postAutenticado('api/ejecutivo/objetivo/listar', postData);
	}

	eliminarObjetivo(postData: any): Observable<any> {
		return this.httpService.postAutenticado('api/ejecutivo/objetivo/borrar', postData);
	}

	agregarObjetivo(postData: any): Observable<any> {
		return this.httpService.postAutenticado('api/ejecutivo/objetivo/agregar', postData);
	}

	actualizarAvanceObjetivo(postData: any): Observable<any> {
		return this.httpService.postAutenticado('api/ejecutivo/objetivo/avance/update', postData);
	}

}
