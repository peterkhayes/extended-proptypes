const timeBetweenValidator = require("../../src/validators/timeBetween");
const {assertValid, assertInvalid} = require("../helpers");

describe("timeBetween", () => {

  const start = new Date(100);
  const end = new Date(200);

  const propTypes = {time: timeBetweenValidator(start, end)};

  it("invalid if not a time", () => {
    const props = {time: "asdf"};
    assertInvalid(propTypes, props);
  });

  it("invalid if before start (string case)", () => {
    const props = {time: new Date(+start - 1).toISOString()};
    assertInvalid(propTypes, props);
  });

  it("invalid if before start (number case)", () => {
    const props = {time: new Date(+start - 1).getTime()};
    assertInvalid(propTypes, props);
  });

  it("invalid if before start (date case)", () => {
    const props = {time: new Date(+start - 1)};
    assertInvalid(propTypes, props);
  });

  it("invalid if after end (string case)", () => {
    const props = {time: new Date(+end + 1).toISOString()};
    assertInvalid(propTypes, props);
  });

  it("invalid if after end (number case)", () => {
    const props = {time: new Date(+end + 1).getTime()};
    assertInvalid(propTypes, props);
  });

  it("invalid if after end (date case)", () => {
    const props = {time: new Date(+end + 1)};
    assertInvalid(propTypes, props);
  });

  it("valid if a time inside interval (string case)", () => {
    const props = {time: new Date(+start + 1).toISOString()};
    assertValid(propTypes, props);
  });

  it("valid if a time inside interval (number case)", () => {
    const props = {time: new Date(+start + 1).getTime()};
    assertValid(propTypes, props);
  });

  it("valid if a time inside interval (date case)", () => {
    const props = {time: new Date(+start + 1)};
    assertValid(propTypes, props);
  });

});