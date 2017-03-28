const React = require("react");
const elementWithTypeValidator = require("../../src/validators/elementWithType");
const {assertValid, assertInvalid} = require("../helpers");

describe("elementWithType", () => {

  class ClassComponent extends React.Component {}
  class ClassComponent2 extends React.Component {}
  function FunctionalComponent () {}
  function FunctionalComponent2 () {}

  const propTypes = {
    component: elementWithTypeValidator(ClassComponent),
  };

  it("invalid if not a component", () => {
    const props = {component: "hello!"};
    assertInvalid(propTypes, props);
  });

  describe("for class components", () => {

    it("invalid if an instance of a functional component", () => {
      const props = {component: React.createElement(FunctionalComponent, {})};
      assertInvalid(propTypes, props);
    });

    it("invalid if an instance of another class component", () => {
      const props = {component: React.createElement(ClassComponent2, {})};
      assertInvalid(propTypes, props);
    });

    it("valid if an instance of the specified component", () => {
      const props = {component: React.createElement(ClassComponent, {})};
      assertValid(propTypes, props);
    });

  });

  describe("for functional components", () => {

    const functionalPropTypes = {
      component: elementWithTypeValidator(FunctionalComponent),
    };

    it("invalid if an instance of a class component", () => {
      const props = {component: React.createElement(ClassComponent, {})};
      assertInvalid(functionalPropTypes, props);
    });

    it("invalid if an instance of another functional component", () => {
      const props = {component: React.createElement(FunctionalComponent2, {})};
      assertInvalid(functionalPropTypes, props);
    });

    it("valid if an instance of the specified component", () => {
      const props = {component: React.createElement(FunctionalComponent, {})};
      assertValid(functionalPropTypes, props);
    });

  });

});