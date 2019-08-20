const expect = require('chai').expect
const add = require('../src/add')
describe('add', function() {
    it('2+3 shoule return 5', () => {
        expect(add(2,3)).to.equal(5)
    })
    it('4+4 shoule return 8', () => {
        expect(add(4,4)).to.equal(8)
    })
    it('4+5 shoule be a string', () => {
        expect(add(4,5)).to.be.a('string')
    })
});


