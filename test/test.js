const expect = require('chai').expect;
const services = require('../services/pubs.services');

describe('service', function() {
    describe('#serviceliste()', function () {
        it('listeservice oki', function () {

            expect(services.listePubs()).to.be.an('array');
        });
    });

});