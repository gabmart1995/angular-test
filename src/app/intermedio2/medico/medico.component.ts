import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

	medicos: any[];

  constructor(
  	public medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  salidarMedico( nombre: string ) {
  	return `Hola ${ nombre }`;
  }

  getMedicos() {
  	this.medicoService.getMedicos()
  		.subscribe(( resp: any[] ) => this.medicos = resp );
  }
}
