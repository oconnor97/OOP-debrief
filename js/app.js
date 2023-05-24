class TradArt {
  constructor(draw, paint, sculpt) {
    this.draw = draw;
    this.paint = paint;
    this.sculpt = sculpt;
    this.projects = [];
  }
  intro() {
    console.log(
      "I'm a traditional artist and I primarily " + this.draw + " " + this.paint
    );
  }
}

class ArtStudent extends TradArt {
  constructor(draw, paint, sculpt) {}
}

class ProArtist extends TradArt {
  constructor(draw, paint, sculpt) {}
}

const artist1 = new ArtStudent("Jon", "Jackson", 40, "brown", 8);

artist1.intro();
person1.addRelative("Jane Doe");
person1.addSport("snow skiing");
person1.hasBirthday();

console.log(person1);
