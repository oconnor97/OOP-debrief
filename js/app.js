console.log('loaded');

class Dog {
    constructor(name, age, breed, furColor){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.furColor = furColor;
    }

    greet(){
       console.log(`Hello I'm ${this.name} the dog!`);
    }
    hasBirthday(){
        this.age++;
    }
    changeHairColor(newColor) {
        this.hairColor = newColor;
    }

}
