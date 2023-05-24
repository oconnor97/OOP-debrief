class Pet {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.activities();
    // this.hairColor = hairColor;
  }
  greet() {
    console.log("Hello I am " + this.name + " and I am a " + this.type);
  }
}

class Cat extends Pet {
  constructor(name, type, age) {
    super(name, type, age);
    this.funFact = funFact;
  }
}

class PetCare extends Cat {
  constructor(name, type, age) {
    super(name, type, age);
    // this.a = [];
  }
}
