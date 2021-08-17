import { capitalizeObjectKeys, getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys } from './code-challenge-03.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});

test('it sorts the keys by shortest to longest', () => {
  const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
  const output = sortedKeys(dataObject); //act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
});

test('filters out the age key', () => {
  const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, }; //arrange
  const output = getFilteredKey(dataObject); //act
  expect(output).toEqual(['age']); //assert
});

test('given an object returns a new array of arrays of key value pairs', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = getArrayOfKeysAndValues(dataObject); //act
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); //assert
});

test('return an array of arrays of key value pairs sorted longest to shortest by values length', () => {
  const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; //arrange
  const output = sortedArraysByValuesLength(dataObject); //act
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); //assert
});