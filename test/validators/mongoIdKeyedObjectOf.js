const PropTypes = require("proptypes");
const mongoIdKeyedObjectOfValidator = require("../../src/validators/mongoIdKeyedObjectOf");
const {assertValid, assertInvalid} = require("../helpers");

describe("mongoIdKeyedObjectOf", () => {

  const propTypes = {
    items: mongoIdKeyedObjectOfValidator(PropTypes.shape({
      str: PropTypes.string.isRequired,
      int: PropTypes.number,
    })),
  };

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

  it("invalid if inner validator fails", () => {
    const props = {
      items: {
        "53768e40d1d126f814a00866": {
          str: 1,
          int: "foo",
        },
        "53768e40d1d126f814a00867": {
          str: "bar",
        },
      },
    };
    assertInvalid(propTypes, props);
  });

  it("invalid if inner validator fails (2)", () => {
    const otherPropTypes = {items: mongoIdKeyedObjectOfValidator(PropTypes.bool)};

    const props = {
      items: {
        "53768e40d1d126f814a00866": "true",
        "53768e40d1d126f814a00867": false,
      },
    };

    assertInvalid(otherPropTypes, props);
  });

  it("invalid if required and missing", () => {
    const requiredPropTypes = {items: mongoIdKeyedObjectOfValidator(PropTypes.bool).isRequired};

    const props = {};

    assertInvalid(requiredPropTypes, props);
  });

  it("valid", () => {
    const props = {
      items: {
        "53768e40d1d126f814a00866": {
          str: "foo",
          int: 1,
        },
        "53768e40d1d126f814a00867": {
          str: "bar",
        },
      },
    };
    assertValid(propTypes, props);
  });

  it("valid (2)", () => {
    const otherPropTypes = {
      items: mongoIdKeyedObjectOfValidator(PropTypes.bool),
    };

    const props = {
      items: {
        "53768e40d1d126f814a00866": true,
        "53768e40d1d126f814a00867": false,
      },
    };

    assertValid(otherPropTypes, props);
  });
});