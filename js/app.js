class TradArt {
  constructor(draw, paint, sculpt) {
    this.draw = draw;
    this.paint = paint;
    this.sculpt = sculpt;
    this.projects = [];
  }
  intro() {
    console.log(
      "I'm a traditional artist and I primarily work with " +
        this.draw +
        " " +
        this.paint
    );
  }
}

class ArtStudent extends TradArt {
  constructor(draw, paint, sculpt) {
    super(draw, paint, sculpt);
  }
}

class ProArtist extends TradArt {
  constructor(draw, paint, sculpt) {
    super(draw, paint, sculpt);
  }
}

const artist1 = new ArtStudent("graphite", "acrylics", "polymer clay");
const artist2 = new ArtStudent("charcoal", "oils", "ceramics");

artist1.intro();

console.log(artist1);
