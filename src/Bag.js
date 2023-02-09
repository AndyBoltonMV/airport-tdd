class Bag {
  constructor(weight) {
    if (weight) {
      this.weight = weight;
    } else {
      throw new Error("bag needs weight");
    }
  }
}

module.exports = Bag;
