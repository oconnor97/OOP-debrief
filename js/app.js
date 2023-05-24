console.log('loaded');

class Vehicle {
    constructor(carName, yearMade, color, ) {
        this.brand = carName;
        this.age = yearMade;
        this.color = color;
}
    carModel() {
        console.log('You own a' + this.brand + '.');
}
}
class Model extends Vehicle {
    constructor(carName, mod) {
        super(carName);
        this.model = mod;
    }
    show() {
        return this.carModel() + ', it is a ' + this.model;
    }
}

class Year extends Vehicle { 
    constructor(placeMade,) {
        this.placeMade = placeMade;
}
    manufacture() {
        console.log('Your vehicle was made in' + this.placeMade + ',' + 'in' 
        + this.yearMade + ', and the color of the vehicle is ' + this.color);
    }
}

const car1 = new Year ('Japan', '2015', 'white');

car1.manufacture();

console.log(car1);

