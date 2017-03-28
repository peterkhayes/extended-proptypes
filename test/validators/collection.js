const collection = require("../../src/validators/collection");
const {assertValid, assertInvalid} = require("../helpers");

describe("collection", () => {

  const propTypes = {items: collection};

  it("invalid if neither an array nor object", () => {
    const props = {items: "hello"};

    assertInvalid(propTypes, props);
  });

  it("valid if an array", () => {
    const props = {items: [{foo: "bar"}, 1]};

    assertValid(propTypes, props);
  });

  it("valid if an object", () => {
    const props = {items: {a: "b", c: "d"}};

    assertValid(propTypes, props);
  });
});