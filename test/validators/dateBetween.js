const dateBetweenValidator = require("../../src/validators/dateBetween");
const {assertValid, assertInvalid} = require("../helpers");

describe("dateBetween", () => {

  const start = new Date(100);
  const end = new Date(200);

  const propTypes = {date: dateBetweenValidator(start, end)};

  it("invalid if not a date", () => {
    const props = {date: new Date().toISOString()};
    assertInvalid(propTypes, props);
  });

  it("invalid if before start", () => {
    const props = {date: new Date(+start - 1)};
    assertInvalid(propTypes, props);
  });

  it("invalid if after end", () => {
    const props = {date: new Date(+end + 1)};
    assertInvalid(propTypes, props);
  });

  it("valid if a date inside interval", () => {
    const props = {date: new Date(+start + 1)};
    assertValid(propTypes, props);
  });

});