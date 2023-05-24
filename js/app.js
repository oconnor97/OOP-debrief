console.log('loaded');

class Vehicle {
    constructor(carName, yearMade, color, ) {
        this.brand = carName;
        this.age = yearMade;
        this.color = color;
}
carModel() {
    console.log('I own a' + this.brand + '.');
}
}
class Model extends Vehicle {
    constructor(mod) {
        super(carName);
        this.model = mod;
    }
    show() {
        return this.carModel() + ', it is a ' + this.model;
    }
}

class Year extends Vehicle { 
    constructor()
}