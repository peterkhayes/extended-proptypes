const cssLengthValidator = require("../../src/validators/cssLength");
const {assertValid, assertInvalid} = require("../helpers");

describe("css length", () => {

  const propTypes = {cssLength: cssLengthValidator};

  it("invalid if no number", () => {
    const props = {cssLength: "em"};
    assertInvalid(propTypes, props);
  });

  it("invalid if no unit", () => {
    const props = {cssLength: "10"};
    assertInvalid(propTypes, props);
  });

  it("valid if a pixel value", () => {
    const props = {cssLength: "230px"};
    assertValid(propTypes, props);
  });

  it("valid if an em", () => {
    const props = {cssLength: "15em"};
    assertValid(propTypes, props);
  });

  it("valid if an rem", () => {
    const props = {cssLength: "15rem"};
    assertValid(propTypes, props);
  });

  it("valid if an percent", () => {
    const props = {cssLength: "50%"};
    assertValid(propTypes, props);
  });
});