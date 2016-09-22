// Takes a validator and returns one that passes if no prop is defined.
export default function makeOptionalValidator (validator) {
  return function(props, propName, ...rest) {
    if (props[propName] == null) {
      return null;
    } else {
      return validator(props, propName, ...rest);
    }
  };
}