import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService( null );

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });

    it('Init: obtiene todos los medicos', () => {
    	
    	const medicos =  ['medico1', 'medico2', 'medico3'];

    	// se crea un espia que permita emular servicios.
    	spyOn( servicio, 'getMedicos' ).and.callFake( () => {
    		return Observable.from( [ medicos ] );
    	});

    	componente.ngOnInit();
    	expect( componente.medicos.length ).toBeGreaterThan( 0 );
    });

    it('Debe de llamar al servidor para agregar un medico', () => {
    	
    	const spy = spyOn( servicio, 'agregarMedico' ).and.callFake(() => {
    		return Observable.empty();
    	});

    	componente.agregarMedico();

    	// evalua si la instruccion sea llamada
    	expect( spy ).toHaveBeenCalled();
    });

     it('Debe de agregar un nuevo elemento al arreglo de medicos', () => {
    	
    	const medico = { id: 1, nombre: 'Juan' };

    	spyOn( servicio, 'agregarMedico' )
    		.and.returnValue( Observable.from([ medico ]) );

    	componente.agregarMedico();

    	// respuestas positivas de un observable.
    	expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });


     it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {

     	const error = 'No se pudo agregar el medico';

     	spyOn( servicio, 'agregarMedico' ).and
     		.returnValue( Observable.throw( error ) )

     	componente.agregarMedico();

     	expect( componente.mensajeError ).toBe( error );
     }); 


     it('Debe de llamar al servidor para borrar un medico', () => {
     	
     	spyOn( window, 'confirm' ).and.returnValue( true );

     	const spy = spyOn( servicio, 'borrarMedico' ).and
     		.returnValue( Observable.empty() );

     	componente.borrarMedico( '1' );

     	expect( spy ).toHaveBeenCalledWith( '1' );
     });

     it('No Debe de llamar al servidor para borrar un medico', () => {
     	
     	spyOn( window, 'confirm' ).and.returnValue( false );

     	const spy = spyOn( servicio, 'borrarMedico' ).and
     		.returnValue( Observable.empty() );

     	componente.borrarMedico( '1' );

     	expect( spy ).not.toHaveBeenCalledWith( '1' );
     });
});
