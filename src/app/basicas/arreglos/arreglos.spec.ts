import { getRobots } from './arreglos';

//  el x antes del metodo describe indica a jasmine que no va a ejecutar el grupo de pruebas
describe( 'pruebas de arreglos', () => {
	
	it('Debe retornar al menos 3 robots', () => {
		const resp = getRobots();
		expect( resp.length ).toBeGreaterThanOrEqual( 3 );
	});

	// el x antes del metodo it indica a Jasmine que no va a ejecutar la prueba
	it('Debe exisir Megaman y Ultron', () => {
		const resp = getRobots();
		expect( resp ).toContain('Megaman');
		expect( resp ).toContain('Ultron');
	})


});