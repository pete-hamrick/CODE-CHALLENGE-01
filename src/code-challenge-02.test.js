import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge, leastToGreatest, greatestToLeast, lengthSort, alphabetical } from './code-challenge-02.js';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('Evens only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

test('Five characters or fewer', () => {
  const input = [ 'by', 'dog', 'wolf', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});

test('people who are Illuminati', () => {
    const input = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kayne West', member: false },
        { name: 'Bob Ziroll', member: true }
    ]; // arrange
  const output = peopleWhoBelongToTheIlluminati(input); // act
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', member: true }, 
        { name: 'Paris Hilton', member: true }, 
        { name: 'Bob Ziroll', member: true } 
    ]); // assert
});

test('people old enough to see The Matrix', () => {
    const input = [
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ]; // arrange
  const output = ofAge(input); // act
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Bob Ziroll', age: 100 } 
    ]); // assert
});

test('Least to greatest', () => {
  const input = [1, 3, 5, 2, 90, 20]; // arrange
  const output = leastToGreatest(input); // act
  expect(output).toEqual([1, 2, 3, 5, 20, 90]); // assert
});

test('Greatest to least', () => {
  const input = [1, 3, 5, 2, 90, 20]; // arrange
  const output = greatestToLeast(input); // act
  expect(output).toEqual([90, 20, 5, 3, 2, 1]); // assert
});

test('shortest word to longest', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten']	; // arrange
  const output = lengthSort(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']); // assert
});

test('alphabetical sort', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten']	; // arrange
  const output = alphabetical(input); // act
  expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']); // assert
});