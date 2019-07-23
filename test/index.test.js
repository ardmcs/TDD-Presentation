const expect = require('chai').expect;
const assert = require('assert');
const { multiply, divide } = require('../index');

describe('Test Example 1', function() {
  describe('multiply', function() {
    it('should return a product of 2 numbers', function() {
      expect(multiply(5, 6)).to.equal(30);
      expect(multiply(3, 6)).to.equal(18);
    });
  });

  describe('divide', function() {
    it('should return a quotient of 2 numbers', function() {
      expect(divide(6, 3)).to.equal(2);
      expect(divide(10, 2)).to.equal(5);
      expect(divide(10, -2)).to.equal(-5);
    });

    it('should throw error if received any input that is 0', function() {
      expect(() => divide(10, 0)).to.throw();
      expect(() => divide(0, 57)).to.throw();
    });
  });
});

// describe('String#split', function() {
//   it('should return an array', function() {
//     assert(Array.isArray('a,b,c'.split(',')));
//   });

//   it('should return the same array', function() {
//     assert.equal(
//       ['a', 'b', 'c'].length,
//       'a,b,c'.split(',').length,
//       'arrays have equal length'
//     );
//     for (var i = 0; i < ['a', 'b', 'c'].length; i++) {
//       assert.equal(
//         ['a', 'b', 'c'][i],
//         'a,b,c'.split(',')[i],
//         i + 'element is equal'
//       );
//     }
//   });
// });

// before(function() {
//   expected = ['a', 'b', 'c'];
// });

// describe('New String#split', function() {
//   beforeEach(function() {
//     current = 'a,b,c'.split(',');
//   });
//   it('should return an array', function() {
//     assert(Array.isArray(current));
//   });
//   it('should return the same array', function() {
//     assert.equal(expected.length, current.length, 'arrays have equal length');

//     for (let i = 0; i < expected.length; i++) {
//       assert.equal(expected[i], current[i], i + 'element is equal');
//     }
//   });
// });
