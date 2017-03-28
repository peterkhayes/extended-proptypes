const localeValidator = require("../../src/validators/locale");
const {assertValid, assertInvalid} = require("../helpers");

describe("locale", () => {

  const propTypes = {locale: localeValidator};

  it("invalid if not a locale", () => {
    const props = {locale: "e-s"};
    assertInvalid(propTypes, props);
  });

  it("valid if a 4-char locale", () => {
    const props = {locale: "es-MX"};
    assertValid(propTypes, props);
  });

  it("valid if a 2-char locale", () => {
    const props = {locale: "es"};
    assertValid(propTypes, props);
  });
});