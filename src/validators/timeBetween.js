import makeConfigurableValidator from "../factories/makeConfigurableValidator";
import isParseableDate from "../utils/isParsableDate";

export default makeConfigurableValidator(function(min, max) {
  return function(props, propName) {
    const val = props[propName];
    if (!isParseableDate(val)) {
      return new Error(`Expected a date for prop \`${propName}\`, but got \`${val}\` instead`);
    }
    if (new Date(val) < new Date(min) || new Date(val) > new Date(max)) {
      return new Error(`Expected prop \`${propName}\` to be between ${min} and ${max} but got \`${val}\``);
    }
  };
});