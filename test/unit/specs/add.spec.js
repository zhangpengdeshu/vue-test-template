import add from '../../../src/add.js'

describe('add', function() {
    it('return must be a number', () => {
        expect(add(2,3)).to.be.a('number')
    })
    it('4+4 shoule return 8', () => {
        expect(add(4,4)).to.equal(8)
    })
});
