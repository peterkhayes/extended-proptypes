import makeConfigurableValidator from "../factories/makeConfigurableValidator";

export default makeConfigurableValidator(function(min, max) {
  if (max == null) max = min;
  if (typeof min !== "number") throw new Error("Must provide a number as the min length for a stringWithLength validator");
  if (typeof min !== "number") throw new Error("Must provide a number (or null) as the max length for a stringWithLength validator");
  return function(props, propName) {
    const str = props[propName];
    if (typeof str !== "string") {
      return new Error(`Expected a string for prop \`${propName}\`, but got \`${str}\` instead`);
    }
    if (str.length < min || str.length > max) {
      return new Error(`Expected prop \`${propName}\` to have length between ${min} and ${max} but got \`${str}\``);
    }
  };
});