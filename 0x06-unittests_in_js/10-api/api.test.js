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

  describe('GET /cart/45', () => {
    it('Responds with 200 and id 45 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/45',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 45');
        done();
      });
    });
  });

  describe('GET /cart/78', () => {
    it('Responds with 200 and id 78 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/78',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 78');
        done();
      });
    });
  });

  describe('GET /cart/99', () => {
    it('Responds with 200 and id 99 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/99',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 99');
        done();
      });
    });
  });

  describe('GET /cart/b45', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/b45',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/45x', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/45x',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/4y5', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/4y5',
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

  describe('GET /available_payments JSON string', () => {
    it('Responds with 200 and correct JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);
10-api/api.test.js
        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Alice', (done) => {
      const options = {
   10-api/api.test.js     url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Alice'
        }
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Alice');
        done();
      });
    });
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });
});
