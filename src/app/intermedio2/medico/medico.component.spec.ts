import { TestBed, ComponentFixture } from '@angular/core/testing'; 
import { MedicoService } from './medico.service';
import { MedicoComponent } from './medico.component';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {

	/*
		Pruebas de integración:

		Permite probar modulos completos dentro de la aplicación

		El testBed permite realizar pruebas de integracion a 
		componentes de angular.
	*/

	let component: MedicoComponent;
	let fixture: ComponentFixture<MedicoComponent>;

	// configuracion basica
	beforeEach(() => {

		// tiene la misma estructura que @ngModule
		TestBed.configureTestingModule({
			declarations: [ MedicoComponent ],
			providers: [ MedicoService ],
			imports: [ HttpClientModule ]
		});

		// regresa un fixture que es una copia del componente HTML + CSS + TypeScript
		fixture = TestBed.createComponent( MedicoComponent );
		component = fixture.componentInstance;
	});

	it('Debe crearse el componente', () => {
		expect( component ).toBeTruthy();
 	});

 	it('Debe retornar el nombre del medico', () => {
		
 		const nombre = 'Gabriel';
 		const resp = component.salidarMedico( nombre );

		expect( resp ).toContain( nombre );
 	});
});