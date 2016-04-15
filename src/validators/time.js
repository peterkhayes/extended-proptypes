import makeStaticValidator from "../factories/makeStaticValidator";

export default makeStaticValidator(function(props, propName) {
  const val = props[propName];
  if (new Date(val).toString() === "Invalid Date") {
    return new Error(`Expected a parsable date for prop \`${propName}\`, but got \`${val}\` instead`);
  }
});