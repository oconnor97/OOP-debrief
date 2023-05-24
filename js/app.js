console.log("loaded");

class Vehicle {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  startEngine() {
    console.log(
      "Starting the engine of " +
        this.brand +
        " " +
        this.model +
        "." +
        "\u{1F525}"
    );
  }
  yearMade() {
    this.year;
  }

  changeColor(newColor) {
    this.color = newColor;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, color, speed) {
    super(brand, model, year, color);
    this.speed = speed;
  }
  accelerate(newSpeed) {
    this.speed = newSpeed;
  }
}

class RentedCar extends Car {
  constructor(brand, model, year, color, type) {
    super(brand, model, year, color);
    this.type = type;
  }
  changeType() {
    this.type;
  }
}

const myCar = new RentedCar("Toyota", "Camry", 2015, "red", "Sedan");
myCar.startEngine();
myCar.accelerate(70);
myCar.changeType();

console.log(myCar);
