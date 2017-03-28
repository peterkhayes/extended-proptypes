import makeStaticValidator from "../factories/makeStaticValidator";

export default makeStaticValidator(function(props, propName) {
  const val = props[propName];
  if (!(val instanceof Date)) {
    return new Error(`Expected a date for prop \`${propName}\`, but got \`${val}\` instead`);
  }
});