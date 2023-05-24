console.log('loaded');

class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  startEngine() {
    console.log(`Starting the engine of ${this.brand} ${this.model}`);
  }

  accelerate(speed) {
    console.log(`Accelerating ${this.brand} ${this.model} to ${speed} mph`);
  }

  brake() {
    console.log(`Applying brakes to ${this.brand} ${this.model}`);
  }
}

const myCar = new Car("Toyota", "Camry", 2022, "silver");
myCar.startEngine();
myCar.accelerate(60);
myCar.brake();

console.log(myCar);


