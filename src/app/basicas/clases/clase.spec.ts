import { Jugador } from './clase';

describe( 'pruebas de clases', () => {

	let jugador = new Jugador();

	// cliclo de vida de las pruebas

	/*
		beforeAll():  Antes de todas las pruebas
		beforeEach(): Antes de cada prueba
		AfterAll(): Despues de todas las pruebas
		AfterEach(): Despues de cada prueba
	*/

	// beforeAll( () => console.log('before all') );
	beforeEach( () => jugador = new Jugador() );
	// afterAll( () => console.log('after all') );
	// afterEach( () => console.log('after each') );

	it( 'Debe de retornar 80 de hp, si recibe 20 de daño', () => {
		const resp = jugador.recibeDanio( 20 );
		expect( resp ).toBe( 80 );
	});

	it( 'Debe de retornar 50 de hp, si recibe 50 de daño', () => {
		const resp = jugador.recibeDanio( 50 );
		expect( resp ).toBe( 50 );
	});

	it( 'Debe de retornar 0 de hp, si recibe 100 de daño o más', () => {
		const resp = jugador.recibeDanio( 100 );
		expect( resp ).toBe( 0 );
	});
});