class Apple {
    constructor(flavor, texture, color, name) {
        this.flavor =  flavor;
        this.texture = texture;
        this.color = color;
        this.name = name;
    }
    description() {
        console.log('This is a ' + this.name + ' apple. It\'s a ' + this.texture + ', ' + this.color + ', and ' + this.flavor + ' apple.');
    }
}

class Jazz extends Apple {
    constructor(flavor, texture, color, name, seasonality) {
        super(flavor, texture, color, name);
        this.seasonality = seasonality
    }
    seasonsWhenFreshest(newSeason) {
        this.seasonality = newSeason;
    }
}