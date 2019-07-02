function getExtensibleObject () {
    return {
      extend (otherObject) {
        for (let key in otherObject) {
          if (typeof otherObject[key] === 'function') {
            Object.getPrototypeOf(this)[key] = otherObject[key]
          } else {
            this[key] = otherObject[key]
          }
        }
      }
    }
  }