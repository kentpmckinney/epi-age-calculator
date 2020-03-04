import { Age } from '../src/age.js';

describe('The Age class', () => {
	let age;

	beforeEach(() => {
		age = new Age(10);
	});

	test('Class constructor accept a persons age in Earth years and creates an valid object', () => {
		expect(age.earthYears).toEqual(10);
	});

	test('', () => {
		age/.24
	});

});
