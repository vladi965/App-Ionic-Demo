import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentsService } from './../../servicios/assessments.service';

@Component({
  selector: 'app-mis-assessments',
  templateUrl: './mis-assessments.page.html',
  styleUrls: ['./mis-assessments.page.scss'],
})
export class MisAssessmentsPage implements OnInit {

	// Mis evaluaciones
	assessments =  [];
	cantResAss;
	cantSinResAss;

	// Mis Jefes
	assessmentsJefes =  [];
	cantResAssJefes;
	cantSinResAssJefes;

	// Mis Colaboradores
	assessmentsColaboradores =  [];
	cantResAssColaboradores;
	cantSinResAssColaboradores;

	// Mis Pares
	assessmentsPares =  [];
	cantResAssPares;
	cantSinResAssPares;


	slidesOptions = {
		slidesPerView: 2.5
	}

	constructor(
		private router: Router,
		private assessmentService: AssessmentsService
	) {}


	ngOnInit(){

		var postData = { };

		this.assessmentService.listarAssessments(postData).subscribe(
				
			(res: any) => {

				// Mis Assessments
				this.assessments = res.assessments.assessments;
				this.cantResAss = res.assessments.resueltas;
				this.cantSinResAss = res.assessments.sinResolver;

				// Mis Jefes
				this.assessmentsJefes = res.assessmentsJefes.assessments;
				this.cantResAssJefes = res.assessmentsJefes.resueltas;
				this.cantSinResAssJefes = res.assessmentsJefes.sinResolver;

				// Mis Colaboradores
				this.assessmentsColaboradores = res.assessmentsColaboradores.assessments;
				this.cantResAssColaboradores = res.assessmentsColaboradores.resueltas;
				this.cantSinResAssColaboradores = res.assessmentsColaboradores.sinResolver;

				// Mis Pares
				this.assessmentsPares = res.assessmentsPares.assessments;
				this.cantResAssPares = res.assessmentsPares.resueltas;
				this.cantSinResAssPares = res.assessmentsPares.sinResolver;
			},
			(error: any) => {
				console.log('Conexión perdida.');
			}
		);

	}

}
