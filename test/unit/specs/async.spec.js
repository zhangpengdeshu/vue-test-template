import async from '../../../src/async.js'

describe('async', () => {
    it('shoule return 3', async () => {
        let result = await async()
        expect(result).to.equal(4)
    })
})
