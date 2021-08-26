import { sortByChildren, containsW, isNum, isCapitalized, citiesAtoJ } from './code-challenge-07.js';

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];
    
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should return true if the string contains lowercase w', () => {
    expect(containsW('hello world')).toEqual(true);
    expect(containsW('Hello World')).toEqual(false);
    expect(containsW('hello everyone')).toEqual(false);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the input contains a number and false if no number', () => {
    expect(isNum(1234567890)).toEqual(true);
    expect(isNum('12345')).toEqual(true);
    expect(isNum('h3llo w0rld')).toEqual(true);
    expect(isNum('hello world')).toEqual(false);
    expect(isNum('')).toEqual(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true if the input contains world in all lowercase letters', () => {
    expect(containsW('hello world')).toEqual(true);
    expect(containsW('Hello World')).toEqual(false);
    expect(containsW('hello everyone')).toEqual(false);
  });
});

describe('Testing challenge 5', () => {
  test('It should return all words beginning with a capital letter', () => {
    expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toEqual(	[ 'We', 'Return', 'Words', 'With', 'Letter' ]);
    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
    expect(isCapitalized('these words are all failures')).toEqual([]);
  });
});

describe('Testing challenge 6', () => {
  test.skip('It should return a new array containing any cities that begin with the letters A through J', () => {
    expect(citiesAtoJ(['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'])).toEqual(	[ 'Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken' ]);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toEqual(['Albuquerque', 'Chicago', 'Eugene']);
    expect(citiesAtoJ([])).toEqual([]);
  });
});
