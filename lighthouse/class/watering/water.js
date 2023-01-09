class Plant {
  water() {
    console.log(`Watering the ${this.type}`);
    this.lastWatered = Date();
  }
}

class Flower extends Plant {
  constructor() {
    super()
    this.type = "flower";
  }
} 

class Tree extends Plant {
  constructor() {
    super()
    this.type = "tree";
  }
}

class Bush extends Plant {
  constructor() {
    super()
    this.type = "bush";
  }
}


let newFlower = new Flower();
newFlower.water();