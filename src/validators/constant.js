import makeConfigurableValidator from "../factories/makeConfigurableValidator";

export default makeConfigurableValidator(function(expected) {
  return function(props, propName) {
    const value = props[propName];
    if (value !== expected) {
      return new Error(`Expected prop \`${propName}\` to be \`${expected}\` but got \`${value}\``);
    }
  };
});