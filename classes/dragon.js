// Your code here
// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static getDragons(...Dragon) {
    return Dragon.map((Dragon) => Dragon.name);
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
}

const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());























/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}