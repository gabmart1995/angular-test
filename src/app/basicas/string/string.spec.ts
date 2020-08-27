import { mensaje } from './string';

describe('Pruebas de strings', () => {

	// prueba de tipo
	it('Debe devolver un string', () => {
		const resp = mensaje('Gabriel');
		expect( typeof resp ).toBe('string');
	});

	// prueba de retornos de datos
	it('Debe retornar un saludo con el nombre enviado', () => {
		const nombre = 'Juan';
		const resp = mensaje('Juan');
		expect( resp ).toContain( nombre );
	});


});