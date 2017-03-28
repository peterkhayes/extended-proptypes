import makeStaticValidator from "../factories/makeStaticValidator";
import isParseableDate from "../utils/isParsableDate";

export default makeStaticValidator(function(props, propName) {
  const val = props[propName];
  if (!isParseableDate(val)) {
    return new Error(`Expected something parsable as a date for prop \`${propName}\`, but got \`${val}\` instead`);
  }
});