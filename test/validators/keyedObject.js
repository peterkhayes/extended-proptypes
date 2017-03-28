const keyedObjectValidator = require("../../src/validators/keyedObject");
const {assertValid, assertInvalid} = require("../helpers");

describe("keyedObject", () => {

  const propTypes = {items: keyedObjectValidator(/^a.+/)};

  it("invalid if not an object", () => {
    const props = {items: [{str: "hello"}]};

    assertInvalid(propTypes, props);
  });

  it("invalid if at least one key does not match pattern", () => {
    const props = {
      items: {
        asdf: {
          str: "foo",
          int: 1,
        },
        hjkl: true,
      },
    };

    assertInvalid(propTypes, props);
  });

  it("valid if keys are object ids", () => {
    const props = {
      items: {
        asdf: {
          str: "foo",
          int: 1,
        },
        abcd: true,
      },
    };

    assertValid(propTypes, props);
  });
});