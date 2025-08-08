import {describe} from 'mocha'
import {expect, assert} from 'chai'
import {sum, multiply, divide} from '../calculator.js'

describe('Demo tests', () => {
    it('Test sum function', () => {
        // arrange
        let x = 5
        let y = 10
        let expected = 15

        // act
        let result = sum(x, y)

        // assert
        expect(result).to.equal(expected)
    }),
    it('Test multiply function', () => {
        expect(multiply(2, 20)).to.equal(40)
    }),
    it('Test divide function', () => {
        assert.equal(20, divide(100, 5))
    }),
    it('shoud throw an error if first parameter is not a number', () => {
        expect(() => sum('a', 5)).to.throw
        expect(() => sum([], 5)).to.throw
        expect(() => sum({}, 5)).to.throw
        expect(() => sum('5', 5)).to.throw('Invalid parameter!')

        assert.throws(() => sum('a', 5), Error)
        assert.throws(() => sum('a', 5), Error, 'Invalid parameter!') 
    }),
    it('shoud throw an error if second parameter is not a number', () => {
        expect(() => sum(2, 'a')).to.throw
        expect(() => sum(2, [])).to.throw
        expect(() => sum(2, {})).to.throw
        expect(() => sum(2, '5')).to.throw('Invalid parameter!')

        assert.throws(() => sum(2, 'a'), Error)
        assert.throws(() => sum(2, 'a'), Error, 'Invalid parameter!') 
    })
})