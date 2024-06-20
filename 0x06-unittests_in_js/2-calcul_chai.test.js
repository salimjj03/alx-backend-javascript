var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM no round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 2, 4)).to.equal(6);
    });
  });

  describe('SUM first round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 3.7, 4)).to.equal(8);
    });
  });

  describe('SUM second round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 4, 3.7)).to.equal(8);
    });
  });

  describe('SUM both round', function () {
    it('should return 9', function () {
      chai.expect(calculateNumber('SUM', 4.4, 4.5)).to.equal(9);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 1', function () {
      chai.expect(calculateNumber('SUBTRACT', 5, 4)).to.equal(1);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -2', function () {
      chai.expect(calculateNumber('SUBTRACT', 2.2, 4)).to.equal(-2);
    });
  });

  describe('SUBTRACT second round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('SUBTRACT', 4, 2.3)).to.equal(2);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.25', function () {
      chai.expect(calculateNumber('DIVIDE', 2, 7.5)).to.equal(0.25);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});

