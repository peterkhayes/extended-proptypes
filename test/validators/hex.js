const hexValidator = require("../../src/validators/hex");
const {assertValid, assertInvalid} = require("../helpers");

describe("hex", () => {

  const propTypes = {hex: hexValidator};

  it("invalid if not a hex string", () => {
    const props = {hex: "hex string"};
    assertInvalid(propTypes, props);
  });

  it("valid if a hex without leading 0x", () => {
    const props = {hex: "0123456789abcdef"};
    assertValid(propTypes, props);
  });

  it("valid if a hex with leading 0x", () => {
    const props = {hex: "0x0123456789abcdef"};
    assertValid(propTypes, props);
  });

  it("valid if a hex with leading 0X", () => {
    const props = {hex: "0X0123456789abcdef"};
    assertValid(propTypes, props);
  });
});