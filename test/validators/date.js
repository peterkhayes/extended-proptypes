const dateValidator = require("../../src/validators/date");
const {assertValid, assertInvalid} = require("../helpers");

describe("date", () => {

  const propTypes = {date: dateValidator};

  it("invalid if not a date", () => {
    const props = {date: new Date().toISOString()};
    assertInvalid(propTypes, props);
  });

  it("valid if a date", () => {
    const props = {date: new Date()};
    assertValid(propTypes, props);
  });

});