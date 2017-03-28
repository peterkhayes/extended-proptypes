const percentValidator = require("../../src/validators/percent");
const {assertValid, assertInvalid} = require("../helpers");

describe("percent", () => {

  const propTypes = {pct: percentValidator};

  it("invalid if not a percent", () => {
    const props = {pct: "100"};
    assertInvalid(propTypes, props);
  });

  it("invalid if no number", () => {
    const props = {pct: "%"};
    assertInvalid(propTypes, props);
  });

  it("valid if a percent", () => {
    const props = {pct: "46%"};
    assertValid(propTypes, props);
  });
});