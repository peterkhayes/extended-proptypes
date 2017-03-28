const stringMatchingValidator = require("../../src/validators/stringMatching");
const {assertValid, assertInvalid} = require("../helpers");

describe("stringMatching", () => {

  const propTypes = {str: stringMatchingValidator(/^a+$/)};

  it("invalid if not a string", () => {
    const props = {str: false};
    assertInvalid(propTypes, props);
  });

  it("invalid if string does not match", () => {
    const props = {str: "aaaaab"};
    assertInvalid(propTypes, props);
  });

  it("valid if string matches", () => {
    const props = {str: "aaaaaaaa"};
    assertValid(propTypes, props);
  });
});