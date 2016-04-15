// Takes a validator and returns one that fails if no prop is defined.
export default function makeRequiredValidator (validator) {
  return function(props, propName, componentName, location) {
    if (props[propName] == null) {
      return new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\``);
    } else {
      return validator(props, propName, componentName, location);
    }
  };
}