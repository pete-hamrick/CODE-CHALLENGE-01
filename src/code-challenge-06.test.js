import { findMax, returnTen } from './code-challenge-06';

  test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });

  test.skip('returns the highest value from a matrix', () => {
      expect(findMax([[13,24,24,2], [2,5,6], [2,3]])).toEqual(24)
  })