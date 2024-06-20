const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/15', () => {
    it('Responds with 200 and id 15 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/15',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 15');
        done();
      });
    });
  });

  describe('GET /cart/2', () => {
    it('Responds with 200 and id 2 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/2',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 2');
        done();
      });
    });
  });

  describe('GET /cart/30', () => {
    it('Responds with 200 and id 30 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/30',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 30');
        done();
      });
    });
  });

  describe('GET /cart/b15', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/b15',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/3a5', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/3a5',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/12x', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12x',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/abc', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/abc',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
