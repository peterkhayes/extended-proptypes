const iterable = require("../../src/validators/iterable");
const {assertValid, assertInvalid} = require("../helpers");

describe("iterable", () => {

  const propTypes = {items: iterable};

  it("invalid if a boolean", () => {
    const props = {items: true};
    assertInvalid(propTypes, props);
  });

  it("invalid if a number", () => {
    const props = {items: 23};
    assertInvalid(propTypes, props);
  });

  it("invalid if a plain object", () => {
    const props = {items: {foo: "bar"}};
    assertInvalid(propTypes, props);
  });

  it("valid if a string", () => {
    const props = {items: "hello"};
    assertValid(propTypes, props);
  });

  it("valid if an array", () => {
    const props = {items: ["foo", "bar"]};
    assertValid(propTypes, props);
  });

  it("valid if a set", () => {
    const props = {items: new Set()};
    assertValid(propTypes, props);
  });

  it("valid if an map", () => {
    const props = {items: new Map()};
    assertValid(propTypes, props);
  });

  it("valid if a typed array", () => {
    const props = {items: new Int8Array(128)};
    assertValid(propTypes, props);
  });
});