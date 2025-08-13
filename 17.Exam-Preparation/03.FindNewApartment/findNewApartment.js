const findNewApartment = {
  isGoodLocation(city, nearPublicTransportation) {
    if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean"){
        throw new Error("Invalid input!");
    }
    if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
        return "This location is not suitable for you.";
    } else {
        //град, който е София, Пловдив или Варна
        if (nearPublicTransportation == true) {
            return "You can go on home tour!";
        } else {
            return "There is no public transport in area.";
        }
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number"
     || price <= 0 || budget <= 0) {
      throw new Error("Invalid input!");
    }

    let result = budget - price;

    if (result < 0) {
      //budget < price -> не ми стигат пари
      return "You don't have enough money for this house!";
    } else {
      //budget >= price -> парите ми стигат
      return "You can afford this home!";
    }
  },
  isLargeEnough(apartments, minimalSquareMeters) {
    //apartments - масив с площите на всички налични апартаменти
    //minimalSquareMeters - колко най-малко може да е позволената площ

    //apartments = [20, 30, 40 , 50]
    //minimalSquareMeters = 30
    let resultArr = []; //нов празен масив, в който се добавят само площите на апаратементите, които са по-големи от minimalSquareMeters 
    if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
      throw new Error("Invalid input!");
    }

    for (let i = 0; i < apartments.length; i++) {
      if (apartments[i] >= minimalSquareMeters) {
        resultArr.push(apartments[i]);
      }
    }
    //resultArr = [30, 40, 50]
    //площите на апартаментите, които стават
    return resultArr.join(', '); //"30, 40, 50"
  }
};

export { findNewApartment }