const PropTypes = require("proptypes");
const keyedObjectOfValidator = require("../../src/validators/keyedObjectOf");
const {assertValid, assertInvalid} = require("../helpers");

describe("keyedObjectOf", () => {

  const propTypes = {items: keyedObjectOfValidator(/^a.+/, PropTypes.bool)};

  it("invalid if not an object", () => {
    const props = {items: [{str: "hello"}]};

    assertInvalid(propTypes, props);
  });

  it("invalid if at least one key does not match pattern", () => {
    const props = {
      items: {
        asdf: false,
        hjkl: true,
      },
    };

    assertInvalid(propTypes, props);
  });

  it("invalid if at least one val does not match validator", () => {
    const props = {
      items: {
        asdf: false,
        abcd: 1,
      },
    };

    assertInvalid(propTypes, props);
  });

  it("valid if keys and values match", () => {
    const props = {
      items: {
        asdf: false,
        abcd: true,
      },
    };

    assertValid(propTypes, props);
  });
});