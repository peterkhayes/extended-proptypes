const mongoIdKeyedObjectValidator = require("../../src/validators/mongoIdKeyedObject");
const {assertValid, assertInvalid} = require("../helpers");

describe("mongoIdKeyedObject", () => {

  const propTypes = {items: mongoIdKeyedObjectValidator};

  it("invalid if not an object", () => {
    const props = {items: [{str: "hello"}]};

    assertInvalid(propTypes, props);
  });

  it("invalid if keys are not object ids", () => {
    const props = {
      items: {
        asdf: {
          str: "foo",
          int: 1,
        },
      },
    };

    assertInvalid(propTypes, props);
  });

  it("valid if keys are object ids", () => {
    const props = {
      "53768e40d1d126f814a00866": true,
      "53768e40d1d126f814a00867": {foo: "bar"},
    };

    assertValid(propTypes, props);
  });
});