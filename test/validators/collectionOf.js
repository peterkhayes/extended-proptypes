const PropTypes = require("proptypes");
const collectionOfValidator = require("../../src/validators/collectionOf");
const {assertValid, assertInvalid} = require("../helpers");

describe("collectionOf", () => {

  const propTypes = {
    items: collectionOfValidator(PropTypes.shape({
      str: PropTypes.string.isRequired,
      int: PropTypes.number,
    })),
  };

  it("invalid if neither an array nor object", () => {
    const props = {items: "hello"};

    assertInvalid(propTypes, props);
  });

  it("invalid if an array has items that doesn't match schema", () => {
    const props = {items: [{foo: "bar"}, 1]};

    assertInvalid(propTypes, props);
  });

  it("invalid if an object has items that doesn't match schema", () => {
    const props = {items: {a: "b", c: "d"}};

    assertInvalid(propTypes, props);
  });

  it("valid if an array has items that matches schema", () => {
    const props = {items: [{str: "bar", int: 1}, {str: "foo"}]};

    assertValid(propTypes, props);
  });

  it("valid if an object has items that matches schema", () => {
    const props = {
      items: {
        a: {str: "bar", int: 1},
        b: {str: "foo"},
      },
    };

    assertValid(propTypes, props);
  });
});