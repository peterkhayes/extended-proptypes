const stringWithLengthValidator = require("../../src/validators/stringWithLength");
const {assertValid, assertInvalid} = require("../helpers");

describe("stringWithLength", () => {

  const min = 5;
  const max = 7;

  describe("exact length", () => {

    const propTypes = {str: stringWithLengthValidator(min)};

    it("invalid if not a string", () => {
      const props = {str: true};
      assertInvalid(propTypes, props);
    });

    it("invalid if too short", () => {
      const props = {str: "gold"};
      assertInvalid(propTypes, props);
    });

    it("invalid if too long", () => {
      const props = {str: "purple"};
      assertInvalid(propTypes, props);
    });

    it("valid if exact length", () => {
      const props = {str: "green"};
      assertValid(propTypes, props);
    });

  });

  describe("range of length", () => {

    const propTypes = {str: stringWithLengthValidator(min, max)};

    it("invalid if not a string", () => {
      const props = {str: 523442};
      assertInvalid(propTypes, props);
    });

    it("invalid if too short", () => {
      const props = {str: "teal"};
      assertInvalid(propTypes, props);
    });

    it("invalid if too long", () => {
      const props = {str: "amethyst"};
      assertInvalid(propTypes, props);
    });

    it("valid if exact length", () => {
      const props = {str: "orange"};
      assertValid(propTypes, props);
    });

  });
});