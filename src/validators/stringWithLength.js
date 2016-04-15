import makeConfigurableValidator from "../factories/makeConfigurableValidator";

export default makeConfigurableValidator(function(min, max) {
  if (!(min instanceof Number)) throw new Error("Must provide a number as the min length for a stringWithLength validator");
  if (max != null && !(max instanceof Number)) throw new Error("Must provide a number (or null) as the max length for a stringWithLength validator");
  return function(props, propName) {
    const str = props[propName];
    if (str.length < min || str.length > max) {
      return new Error(`Expected prop \`${propName}\` to have length between ${min} and ${max} but got \`${str}\``);
    }
  };
});