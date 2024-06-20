const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app instance

describe('API Tests', () => {
  describe('GET /', () => {
    it('returns status 200', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns correct message', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Other Tests', () => {
    // Add more tests as needed for other routes or functionality
  });
});
