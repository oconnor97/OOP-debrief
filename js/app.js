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

class Rockit extends Apple {
    constructor(flavor, texture, color, name, seasonality) {
        super(flavor, texture, color, name);
        this.size = size;
    }
    overallSize(appleSize) {
        this.size = newSize;
    }
}

const apple1 = new Rockit('Big', 'soft', 'red', 'Rockit', 'year-round', 'small');

apple1.description();
apple1.seasonsWhenFreshest('year-round');
apple1.overallSize('small');

console.log(apple1)

const apple2 = new Jazz('Floral', 'strong', 'red or maroons', 'Jazz', 'almost year-round', 'average');
apple2.description();
apple2.seasonsWhenFreshest('almost year-round');
apple1.overallSize('average');

console.log(apple2);