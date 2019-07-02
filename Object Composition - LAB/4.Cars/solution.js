function processCommands (params) {
    let cars = {}
    let commandProcessor = (() => {
      const create = ([car, inherit, parentCar]) => {
        let newCar = inherit ? Object.create(cars[parentCar]) : {}
        cars[car] = newCar
      }
  
      const set = ([car, key, value]) => (cars[car][key] = value)
      const print = ([car]) => {
        let carProperties = []
  
        for (let key in cars[car]) {
          carProperties.push(`${key}:${cars[car][key]}`)
        }
  
        console.log(carProperties.join(', '))
      }
  
      return { create, set, print }
    })()
  
    params
      .map(p => p.split(' '))
      .forEach(([command, ...args]) => commandProcessor[command](args))
  }