import { Age } from '../src/age.js';

describe('The Age class', () => {
	let age;

	beforeEach(() => {
		age = new Age(10);
	});

	test('Age object was created properly', () => {
		expect(age.earthYears).toEqual(10);
	});

});
