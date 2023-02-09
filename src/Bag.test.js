const Bag = require("./Bag");

describe("Bag class integrity checks", () => {
  test("should create Bag instance", () => {
    const bag1 = new Bag(1);
    expect(typeof bag1).toBe("object");
  });

  test("should throw error when no weight is passed", () => {
    expect(() => {
      new Bag();
    }).toThrowError("bag needs weight");
  });
  test("should accept an integer for weight, and assign it to a property", () => {
    const bag3 = new Bag(240);
    expect(bag3).toHaveProperty("weight", 240);
  });
});

// Actual project tests

describe("Bag class", () => {
  //bag has weight
  test("bag has weight", () => {
    const bag = new Bag(25);
    expect(bag.weight).toBe(25);
  });
  //if bag has no weight, return error
  test("bag has no weight to return an error", () => {
    expect(() => new Bag()).toThrowError("bag needs weight");
  });
});
