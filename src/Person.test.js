// - Fill out the addBag method. Make sure you use the appropriate keywords and methods to add bag objects to the property bags
// - Export the module.
const Person = require("./Person");
const Bag = require("./Bag");

describe("Person Class integrity checks", () => {
  test("should create an instance of Person", () => {
    const person1 = new Person("Andy", []);
    expect(typeof person1).toBe("object");
  });

  test("should create instance with Person name as property", () => {
    const person2 = new Person("Toby", []);
    expect(person2).toHaveProperty("name", "Toby");
  });

  test("should create an array on the bags property", () => {
    const person3 = new Person("Kevin", []);
    expect(person3).toHaveProperty("bags");
    expect(Array.isArray(person3.bags)).toBe(true);
  });
});

describe("Person Class method checks", () => {
  test("should add a Bag instance to the bags array", () => {
    const bag1 = new Bag(240);
    const person4 = new Person("Kieran", []);
    expect(person4).toHaveProperty("addBag");
    person4.addBag(bag1);
    expect(person4.bags.includes(bag1)).toBe(true);
  });
});
