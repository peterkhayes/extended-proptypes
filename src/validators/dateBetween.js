import makeConfigurableValidator from "../factories/makeConfigurableValidator";

export default makeConfigurableValidator(function(min, max) {
  return function(props, propName) {
    const val = props[propName];
    if (!(val instanceof Date)) {
      return new Error(`Expected a date for prop \`${propName}\`, but got \`${val}\` instead`);
    }
    if (val < new Date(min) || val > new Date(max)) {
      return new Error(`Expected prop \`${propName}\` to be between ${min} and ${max} but got \`${val}\``);
    }
  };
});