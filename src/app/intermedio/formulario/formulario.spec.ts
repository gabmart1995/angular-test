import { FormBuilder } from '@angular/forms';
import { RegisterForm } from './formulario';

describe('Formularios', () => {
	
	let component: RegisterForm;

	beforeEach( () => {
		component = new RegisterForm( new FormBuilder() );
	});

	// valida que los campos existan
	it('Debe de crear un formulario con 2 campos', () => {
		expect( component.form.contains('email') ).toBeTruthy();
		expect( component.form.contains('password') ).toBeTruthy();
	});

	it('El email debe ser obligatorio', () => {
		const control = component.form.get('email');
		control.setValue('');
		expect( control.valid ).toBeFalsy();
	});

	it('El email debe ser un correo valido', () => {
		const control = component.form.get('email');
		control.setValue('gabriel@gmail.com');
		expect( control.valid ).toBeTruthy();
	});

	it('El password debe ser obligatorio', () => {
		const control = component.form.get('password');
		control.setValue('');
		expect( control.valid ).toBeFalsy();
	});

});