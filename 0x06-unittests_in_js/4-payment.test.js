const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('should stub Utils.calculateNumber and log correct message', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
