import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

	constructor(private httpService: HttpService, private router: Router) { }

	listarAssessments(postData: any): Observable<any> {
		return this.httpService.postAutenticado('api/ejecutivo/assessment/listar', postData);
	}
}
