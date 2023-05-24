console.log('loaded');

class Children {
    constructor(age, snack, toy) {
        this.age = age;
        this.snack = snack;
        this.toy = toy;
    }
    hasBirthday() {
        this.age++;
    }
    addSnack(snack) {
        this.snack.push(snack);
    }
    addToy(toy) {
        this.toy.push(toy);
    }
  }
  
  class Baby extends Children {
    constructor(age, snack, toy, napTime) {
        super(age, snack, toy);
        this.napTime = napTime;
    }
    happyBaby(newNap) {
      this.napTime = newNap;
    }
  }
  
  class Toddler extends Baby {
    constructor(age, snack, toy, napTime) {
        super(age, snack, toy, napTime);
        this.learnWalk = [];
    }
    addWalk(walk) {
        this.learnWalk.push(walk);
    }
  }
