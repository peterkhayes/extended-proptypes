import makeStaticValidator from "../factories/makeStaticValidator";

export default makeStaticValidator(function(props, propName) {
  const val = props[propName];
  const type = typeof val;
  if (type !== "number" && type !== "boolean" && type !== "string") {
    const actualType = Array.isArray(val) ? "array" : type;
    return new Error(`Expected a primative for prop \`${propName}\`, but got \`${actualType}\` instead`);
  }
});