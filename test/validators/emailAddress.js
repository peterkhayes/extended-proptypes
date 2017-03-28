const emailAddressValidator = require("../../src/validators/emailAddress");
const {assertValid, assertInvalid} = require("../helpers");

describe("emailAddress", () => {

  const propTypes = {emailAddress: emailAddressValidator};

  it("invalid if not an email", () => {
    const props = {emailAddress: "emailAddress"};
    assertInvalid(propTypes, props);
  });

  it("valid if an emailAddress", () => {
    const props = {emailAddress: "peter@classdojo.com"};
    assertValid(propTypes, props);
  });
});