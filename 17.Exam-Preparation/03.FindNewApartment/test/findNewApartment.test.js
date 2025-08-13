import { findNewApartment } from '../findNewApartment.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('test_findNewApartment', () =>{
    describe('isGoodLocation', () => {
        it('should throw error on invalid input', () => {
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], false), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], 1), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], null), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(['Sofia'], undefined), "Invalid input!");
        });
        it('should return "This location is not suitable for you." if location is not valid', () => {
            //Arrange
            const city = 'Ruse';
            const nearPublicTransportation = true;
            const expected = 'This location is not suitable for you.';
            //Act
            const result = findNewApartment.isGoodLocation(city, nearPublicTransportation);
            //Assert
            assert.equal(result, expected);
        });
        it('should return "You can go on home tour!" if location is good and public transport is available', () => {
            // Arrange
            const city = 'Sofia';
            const nearPublicTransportation = true;
            const expected = "You can go on home tour!";

            //Act
            const result = findNewApartment.isGoodLocation(city, nearPublicTransportation);

            //Assert
            assert.equal(result, expected);

        });
        it('should return "There is no public transport in area." if location is good but public transport is unavailable', () => {
            //Arrange
            const city = 'Sofia';
            const nearPublicTransportation = false;
            const expected =  "There is no public transport in area.";

            //Act
            const result = findNewApartment.isGoodLocation(city, nearPublicTransportation);

            //Assert
            assert.equal(result, expected);
        });
    }),
    describe('Test isLargeEnough', () => {
        it('Should return apartments that meet the wanted criteria for minimal square meters', () => {
            //Arrange
            const aparatments = [20, 30, 40, 50];
            const minimalSquareMeters = 30;
            const expected = "30, 40, 50";

            //Act
            const result = findNewApartment.isLargeEnough(aparatments, minimalSquareMeters);

            //Assert
            assert.equal(result, expected);
        });

        it('Should throw error on onvalid input', () => {
            assert.throws(() => findNewApartment.isLargeEnough('30, 40, 50', 30), 'Invalid input!');
            assert.throws(() => findNewApartment.isLargeEnough([30, 40, 50], '30'), 'Invalid input!');
            assert.throws(() => findNewApartment.isLargeEnough([], '30'), 'Invalid input!');
        });
    }),
    describe('isItAffordable', () => {
        it('should throw an error on invalid input', () => {
            assert.throws(() => findNewApartment.isItAffordable('200', 200), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(200, '200', 'Invalid input!'));
            assert.throws(() => findNewApartment.isItAffordable(0, 200), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(-1, 200), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable('200', '200'), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(200, 0), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(200, -1), 'Invalid input!');
        });
        it('should not be affordable if price is greater than budget', () => {
           //Arrange
           const price = 1300;
           const budget = 1000;
           const expected = "You don't have enough money for this house!";

           //Act
           const result = findNewApartment.isItAffordable(price, budget);

           //Assert
           assert.equal(result, expected);
        });
        it('should be affordable if price is equal to or less than budget', () => {
            //Arrange
            const price = 1200;
            const budget = 1400;
            const expected = "You can afford this home!"
            
            //Act
            const result = findNewApartment.isItAffordable(price, budget);

            //Assert
            assert.equal(result, expected);
        });
    });
});


