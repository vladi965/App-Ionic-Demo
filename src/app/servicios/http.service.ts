import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  	constructor( private http:HttpClient) {
  	}

  	post(serviceName: string, data: any) {
    
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			"Accept": "application/json"
		});
      	const options = { headers: headers, withCredintials: false };
      
      	const url = environment.apiUrl + serviceName;
    
      	return this.http.post(url, JSON.stringify(data), options);
	}

	postAutenticado(serviceName: string, data: any) {

		const token = localStorage.getItem("token");
    
		const headers = new HttpHeaders({
			'Authorization': 'Bearer ' + token,
			"Content-Type": "application/json",
			"Accept": "application/json"
		});
      	const options = { headers: headers, withCredintials: false };
      
      	const url = environment.apiUrl + serviceName;
    
      	return this.http.post(url, JSON.stringify(data), options);
	}

}
