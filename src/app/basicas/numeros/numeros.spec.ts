import { increment } from './numeros';

describe('pruebas de números', () => {

	it('Debe retornar 100 si el numero ingresado es > a 100', () => {
		const resp = increment( 300 );
		expect( resp ).toBe( 100 );
	}); 

	it('Debe retornar el numero ingresado + 1 si es < 100', () => {
		const resp = increment( 50 );
		expect( resp ).toBe( 51 );
	}); 
});