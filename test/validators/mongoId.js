const mongoIdValidator = require("../../src/validators/mongoId");
const {assertValid, assertInvalid} = require("../helpers");

describe("mongoId", () => {

  const propTypes = {mongoId: mongoIdValidator};

  it("invalid if not a string", () => {
    const props = {mongoId: {}};
    assertInvalid(propTypes, props);
  });

  it("invalid if string doesn't match mongoId pattern", () => {
    const props = {mongoId: "asdf"};
    assertInvalid(propTypes, props);
  });

  it("invalid if required and missing", () => {
    const requiredPropTypes = {mongoId: mongoIdValidator.isRequired};
    const props = {};
    assertInvalid(requiredPropTypes, props);
  });

  it("valid", () => {
    const props = {mongoId: "53768e40d1d126f814a00866"};
    assertValid(propTypes, props);
  });

});