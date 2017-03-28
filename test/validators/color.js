const colorValidator = require("../../src/validators/color");
const {assertValid, assertInvalid} = require("../helpers");

describe("color", () => {

  const propTypes = {color: colorValidator};

  it("invalid if not a color", () => {
    const props = {color: "#zzzzzz"};
    assertInvalid(propTypes, props);
  });

  it("invalid if not a color (2)", () => {
    const props = {color: "rgba(0.1, 0.2)"};
    assertInvalid(propTypes, props);
  });

  it("valid if a lowercase hex code", () => {
    const props = {color: "#dadada"};
    assertValid(propTypes, props);
  });

  it("valid if an uppercase hex code", () => {
    const props = {color: "#00CCFF"};
    assertValid(propTypes, props);
  });

  it("valid if an RGB", () => {
    const props = {color: "rgb(25, 60, 32)"};
    assertValid(propTypes, props);
  });

  it("valid if an RGBA", () => {
    const props = {color: "rgba(25, 60, 32, 0.6)"};
    assertValid(propTypes, props);
  });

});