import { Age } from '../src/age.js';

describe('The Age class', () => {

	beforeEach(() => {
	});

	test('Class constructor accept a persons age in Earth years and creates an valid object', () => {
		let age = new Age(10);
		expect(age.earthYears).toEqual(10);
	});

	test('Class constructor calls a function to return age in Mercury years (age/.24 Earth years)', () => {
		let age = new Age(42);
		expect(age.mercuryYears).toEqual(175);
	});

	test('Class constructor calls a function to return age in Venus years (age/.62 Earth years)', () => {
		
	});

	test('Class constructor calls a function to return age in Mars years (age/1.88 Earth years)', () => {
		
	});

	test('Class constructor calls a function to return age in Jupiter years (age/11.86 Earth years)', () => {
		
	});

	test('Class contains a function to set a property for average life expectancy', () => {
		
	});

	test('Class contains a function to calculate life expectancy', () => {
		
	});

	test('Class contains a function to return how many Mercury years a person is expected to live', () => {
		
	});

	test('Class contains a function to return how many Venus years a person is expected to live', () => {
		
	});

	test('Class contains a function to return how many Mars years a person is expected to live', () => {
		
	});

	test('Class contains a function to return how many Jupiter years a person is expected to live', () => {
		
	});

});
