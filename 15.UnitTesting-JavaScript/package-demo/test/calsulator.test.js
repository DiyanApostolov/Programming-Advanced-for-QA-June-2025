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
    })
})