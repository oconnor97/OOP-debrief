console.log('loaded');
class School {
    constructor(name, type, city) {
        this.name = name;
        this.type = type;
        this.city = city;
    }
    address() {
        console.log('The school named' + this.name +' ' + 'with the type of ' + this.type + 'found in the city of ' + this.city);
    }

}
class Elementary extends School {
    constructor(name, type, city, established) {
        super(name, type, city);
        this.established = established;
    }
    oldElementary(yearEsta) {
        this.established = yearEsta;
    }
}
class Highschool extends School {
    constructor(name, type, city, established) {
        super(name, type, city, established);

    }

}
const school1 = new Elementary('Glen Forst', 'Elementary School', 'Falls Church', 1900);
school1.address();
console.log(school1);