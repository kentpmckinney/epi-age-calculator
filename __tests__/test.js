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
		expect(age.mercuryYears).toEqual(175.00);
	});

	test('Class constructor calls a function to return age in Venus years (age/.62 Earth years)', () => {
		let age = new Age(42);
		expect(age.venusYears).toEqual(67.74);
	});

	test('Class constructor calls a function to return age in Mars years (age/1.88 Earth years)', () => {
		let age = new Age(42);
		expect(age.marsYears).toEqual(22.34);
	});

	test('Class constructor calls a function to return age in Jupiter years (age/11.86 Earth years)', () => {
		let age = new Age(42);
		expect(age.jupiterYears).toEqual(3.54);
	});

	test('Class contains a function to set a property for average life expectancy', () => {
		let age = new Age(100);
		age.avgLifeExpectancy = 80;
		expect(age.avgLifeExpectancy).toEqual(80);
	});

	test('Class contains a function to return how many Earth years a person is expected to live', () => {
		let age = new Age(20);
		age.avgLifeExpectancy = 80;
		expect(age.earthYearsLeft).toEqual(60);
	});

	test('Class contains a function to return how many Mercury years a person is expected to live', () => {
		let age = new Age(20);
		age.avgLifeExpectancy = 80;
		expect(age.mercuryYearsLeft).toEqual(250);
	});

	test('Class contains a function to return how many Venus years a person is expected to live', () => {
		
	});

	test('Class contains a function to return how many Mars years a person is expected to live', () => {
		
	});

	test('Class contains a function to return how many Jupiter years a person is expected to live', () => {
		
	});

	test('Class contains a function to calculate life expectancy', () => {
		
	});

});
