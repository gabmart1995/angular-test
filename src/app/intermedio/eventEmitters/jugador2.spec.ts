import  { Jugador2 } from './jugador2';

describe( 'jugador2 Emit', () => {

	let jugador: Jugador2;

	beforeEach( () => jugador = new Jugador2() );

	it('Debe emitir un evento cuando recibe daño', () => {

		let nuevoHP = 0;

		// espera a que el evento se emita
		jugador.hpCambia.subscribe( ( hp: number ) => nuevoHP = hp );

		jugador.recibeDanio( 1000 );
		expect( nuevoHP ).toBe( 0 );
	});

	it('Debe emitir un evento cuando recibe daño y sobrevivir si es < 100', () => {

		let nuevoHP = 0;

		// espera a que el evento se emita
		jugador.hpCambia.subscribe( ( hp: number ) => nuevoHP = hp );

		jugador.recibeDanio( 50 );
		expect( nuevoHP ).toBe( 50 );
	});
});