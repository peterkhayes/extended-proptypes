const cssSizeValidator = require("../../src/validators/cssSize");
const {assertValid, assertInvalid} = require("../helpers");

describe("css size", () => {

  const propTypes = {cssSize: cssSizeValidator};

  it("invalid if no number", () => {
    const props = {cssSize: "em px %"};
    assertInvalid(propTypes, props);
  });

  it("invalid if no unit", () => {
    const props = {cssSize: "10 50 21 3"};
    assertInvalid(propTypes, props);
  });

  it("invalid if five values", () => {
    const props = {cssSize: "10px 20px 20px 40px 10px"};
    assertInvalid(propTypes, props);
  });

  it("valid if one length value", () => {
    const props = {cssSize: "25px"};
    assertValid(propTypes, props);
  });

  it("valid if two values", () => {
    const props = {cssSize: "15em 35rem"};
    assertValid(propTypes, props);
  });

  it("valid if three values", () => {
    const props = {cssSize: "15rem 10% 35px"};
    assertValid(propTypes, props);
  });

  it("valid if four values", () => {
    const props = {cssSize: "10px 20px 30px 40px"};
    assertValid(propTypes, props);
  });
});