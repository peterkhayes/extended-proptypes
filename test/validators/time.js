const timeValidator = require("../../src/validators/time");
const {assertValid, assertInvalid} = require("../helpers");

describe("time", () => {

  const propTypes = {time: timeValidator};

  it("invalid if a POJO", () => {
    const props = {time: {foo: "bar"}};
    assertInvalid(propTypes, props);
  });

  it("invalid if a non-date string", () => {
    const props = {time: "asdf"};
    assertInvalid(propTypes, props);
  });

  it("valid if a number", () => {
    const props = {time: 946684800000}; // year 2000
    assertValid(propTypes, props);
  });

  it("valid if a timestamp string", () => {
    const props = {time: new Date().toISOString()};
    assertValid(propTypes, props);
  });

  it("valid if a date", () => {
    const props = {time: new Date()};
    assertValid(propTypes, props);
  });
});