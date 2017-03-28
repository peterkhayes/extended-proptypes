const uuidValidator = require("../../src/validators/uuid");
const {assertValid, assertInvalid} = require("../helpers");

describe("uuid", () => {

  const propTypes = {uuid: uuidValidator};

  it("invalid if not a uuid", () => {
    const props = {uuid: "657ac7e2-4082-4b4e-a34b-daeff16b833"};
    assertInvalid(propTypes, props);
  });

  it("valid if a uuid", () => {
    const props = {uuid: "657ac7e2-4082-4b4e-a34b-daeff16b8336"};
    assertValid(propTypes, props);
  });
});