const primativeValidator = require("../../src/validators/primative");
const {assertValid, assertInvalid} = require("../helpers");

describe("primative", () => {

  const propTypes = {primative: primativeValidator};
  const requiredPropTypes = {primative: primativeValidator.isRequired};

  it("invalid if a function", () => {
    const props = {primative: () => null};
    assertInvalid(propTypes, props);
  });

  it("invalid if an array", () => {
    const props = {primative: []};
    assertInvalid(propTypes, props);
  });

  it("invalid if an object", () => {
    const props = {primative: {}};
    assertInvalid(propTypes, props);
  });

  it("invalid if a date", () => {
    const props = {primative: new Date()};
    assertInvalid(propTypes, props);
  });

  it("valid if a string", () => {
    const props = {primative: "53768e40d1d126f814a00866"};
    assertValid(propTypes, props);
  });

  it("valid if a number", () => {
    const props = {primative: 1234};
    assertValid(propTypes, props);
  });

  it("valid if a boolean", () => {
    const props = {primative: false};
    assertValid(propTypes, props);
  });

  it("valid if null and not required", () => {
    const props = {primative: null};
    assertValid(propTypes, props);
  });

  it("valid if undefined and not required", () => {
    const props = {primative: undefined};
    assertValid(propTypes, props);
  });

  it("invalid if null and required", () => {
    const props = {primative: null};
    assertInvalid(requiredPropTypes, props);
  });

  it("invalid if undefined and required", () => {
    const props = {primative: undefined};
    assertInvalid(requiredPropTypes, props);
  });
});