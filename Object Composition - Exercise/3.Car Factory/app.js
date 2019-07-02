function carFactory(carRequirements) {
    const engines = {
        SmallEngine: {
            power: 90,
            volume: 1800
        },
        NormalEngine: {
            power: 120,
            volume: 2400
        },
        MonsterEngine: {
            power: 200,
            volume: 3500
        }
    }

    const carriages = {
        Hatchback: {
            type: 'hatchback',
            color: carRequirements.color
        },
        Coupe: {
            type: 'coupe',
            color: carRequirements.color
        }
    }

    return car = {
        model: carRequirements.model,
        engine: getEngine(),
        carriage: getCarriage(),
        wheels: getWheels()
    }

    function getWheels() {
        let whSize = carRequirements.wheelsize;
        whSize % 2 === 0 ? whSize -= 1 : null;
        return [whSize, whSize, whSize, whSize];
    }

    function getCarriage() {
        if (carRequirements.carriage === carriages.Coupe.type) {
            return carriages.Coupe;
        }

        return carriages.Hatchback;
    }

    function getEngine() {
        if (carRequirements.power <= engines.SmallEngine.power) {
            return engines.SmallEngine;
        } else if(carRequirements.power > engines.SmallEngine.power 
            && carRequirements.power <= engines.NormalEngine.power) {
            return engines.NormalEngine;
        } else {
            return engines.MonsterEngine
        }
    }
}

console.log(carFactory({ 
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 
}).wheels);