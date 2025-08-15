const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            //валидна година: 1900 <= year <= 2022
            if (type == "Sedan") {
                //искаме да е Sedan
                if (year >= 2010) {
                    //Седан след 2010
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    //Седан преди 2010
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }

            throw new Error(`This type of car is not what you are looking for.`);
        }
    },
   brandName(brands, brandIndex) {
        //brands -> масив -> ["Audi", "BMW", "Mercedes"]
        //brandIndex -> цяло число -> 1
        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
           throw new Error("Invalid Information!");
        }
        
        let result = []; //нов масив за оставащите марки
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        //result = ["Audi", "Mercedes"]
        return result.join(", "); //"Audi, Mercedes"
    },
    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {   
        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
                throw new Error("Invalid Information!");
            } 
        
        
        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
        //distanceInKilometers -> изминатото разстояние -> 100
        //consumptedFuelInLiters -> колко литра са изгорени -> 10
        //litersPerHundredKm -> колко са изгорените литри за 100 км

        if (litersPerHundredKm <= 7) {
            //супер
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            //не сме доволни
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}

export { chooseYourCar }