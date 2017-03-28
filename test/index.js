const fs                = require("fs");
const assert            = require("assert");
const path              = require("path");

const requireUncached   = require("require-uncached");
const ExtendedPropTypes = require("../src");

const validators = fs.readdirSync(path.join(__dirname, "../src/validators")).map((f) => f.replace(".js", ""));

describe("index file", () => {

  it("can be extended on to base proptypes object", () => {
    const PropTypes = requireUncached("proptypes");
    Object.assign(PropTypes, ExtendedPropTypes);

    validators.forEach((validator) => {
      assert(PropTypes[validator], `should have added ${validator} to proptypes object`);
    });
  });

  it("can be called on base proptypes object", () => {
    const PropTypes = requireUncached("proptypes");
    ExtendedPropTypes(PropTypes);

    validators.forEach((validator) => {
      assert(PropTypes[validator], `should have added ${validator} to proptypes object`);
    });
  });

});