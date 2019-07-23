const expect = require('chai').expect;
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
