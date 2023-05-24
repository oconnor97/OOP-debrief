// Parent class Vehicle
class Vehicle {
    constructor(speed, safetyRating) {
      this._speed = speed;
      this._engine = [];
      this._safetyRating = safetyRating;
    }
  
    info() {
      console.log("This is Vehicle which includes Cars and Planes!");
    }
    swapEngine(swap) {
        this._engine.push(swap);
    }
  }
  
  // Child class Cars
  class AirTransport extends Vehicle {
    constructor(speed, safetyRating, poweredBy) {
      super(speed, safetyRating);
      this._poweredBy = poweredBy;
    }
  }
  
  // Child class Planes
  class Planes extends Vehicle {
    constructor(speed, safetyRating, nameOfPlane) {
      super(speed, safetyRating);
      this._nameOfPlane = nameOfPlane;
    }
  
    otherNameOfPlane(name) {
      this.nameOfPlane = name;
    }
  }

const firstAirTransport = new Planes('Mach 1.6 (1,200mph)', 5,'F-35');

firstAirTransport.info();
firstAirTransport.swapEngine('The Pratt & Whitney F135');
firstAirTransport.otherNameOfPlane('Lightning II');

console.log(firstAirTransport);