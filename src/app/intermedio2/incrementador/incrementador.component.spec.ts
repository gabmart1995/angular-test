import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';

// permite crear selectores
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent( IncrementadorComponent );
        component = fixture.componentInstance;

    });

     it('Debe de mostrar en el input el valor del progreso', ( done ) => {

        component.cambiarValor( 5 );
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query( By.css('input') ).nativeElement;
            expect( input.value ).toBe('55');

            done();
        });

         /*
            Para procesos que son asincronos, como este caso se debe obtener el parametro
            done que es una funcion que le indica a Jasmine que ha finalizado la prueba
            y que no espere el expect sincrono.
        */
    });

    it('Debe de mostrar la leyenda', () => {

        // inyeccion
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges(); // dispara la deteccion de cambios

        // fixture corresponde al HTML
        // component corresponde al Typescript

        // obtiene el elemento HTML del fixture compilado por angular
        const elemHtml: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elemHtml.innerHTML ).toContain('Progreso de carga');
    });


    it('Debe de incrementar/decrementar en 5, con un click en el botón', () => { 

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        // console.log( botones );

        // triggerEventHandler se ubica en la seccion proto del HTML permite emular eventos Javascript
        botones[0].triggerEventHandler( 'click', null );
        expect( component.progreso ).toBe( 45 );

        botones[1].triggerEventHandler( 'click', null );
        expect( component.progreso ).toBe( 50 );
    }); 

    it('Debe de mostrar en el titulo el valor del progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        const elemHTML: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        botones[0].triggerEventHandler( 'click', null );

        fixture.detectChanges();

        expect( elemHTML.innerHTML ).toContain('45');
    }) 
});
