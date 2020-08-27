import { userLogged } from './booleanos';

describe( 'pruebas de booleanos', () => {
	it('Debe retornar true', () => {
		const resp = userLogged();
		expect( resp ).toBeTruthy();
	}) 
});