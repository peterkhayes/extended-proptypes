const constantValidator = require("../../src/validators/constant");
const {assertValid, assertInvalid} = require("../helpers");

describe("constant", () => {

  it("invalid for non-matches (primative case)", () => {
    const propTypes = {str: constantValidator("foo")};
    const props = {str: "bar"};
    assertInvalid(propTypes, props);
  });

  it("invalid for non-matches (object case)", () => {
    const propTypes = {obj: constantValidator({})};
    const props = {obj: {}};
    assertInvalid(propTypes, props);
  });

  it("valid for matches (primative case)", () => {
    const propTypes = {str: constantValidator("foo")};
    const props = {str: "foo"};
    assertValid(propTypes, props);
  });

  it("valid for matches (object case)", () => {
    const obj = {};
    const propTypes = {obj: constantValidator(obj)};
    const props = {obj};
    assertValid(propTypes, props);
  });

});