function piccolo (array) {

    let parking = []; //масив, в който ще съхранявам номерата на колите в паркинга

    for (let command of array) {
        //1. command = 'IN, CA2844AA'.split(', ') -> ['IN', 'CA2844AA']
        //2. command = 'OUT, CA2844AA'.split(', ') -> ['OUT', 'CA2844AA']
        let action = command.split(', ')[0]; //'IN' или 'OUT'
        let carNumber = command.split(', ')[1];

        if (action === 'IN') {
            //проверяваме, че такава кола няма в паркинга
            if (!parking.includes(carNumber)){
                parking.push(carNumber);
            }
        } else if (action === 'OUT') {
            //намираме къде в паркинга се намира нашата кола
            let position = parking.indexOf(carNumber);
            //проверяваме, че такава кола има на паркинга
            //position === -1 -> такава кола няма в паркинга
            //position !== -1 -> таква кола има в паркинга
            if (position !== -1) {
                parking.splice(position, 1);
            }
        }
    }

    //parking -> номерата на колите в паркинга
    parking.sort(); //сортира масива в нарастващ ред

    if (parking.length === 0) {
        //нямаме коли в паркинга
        console.log('Parking Lot is Empty')
    } else {
        //имаме коли в паркинга
        for (let carNumber of parking) {
            console.log(carNumber);
        }
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);