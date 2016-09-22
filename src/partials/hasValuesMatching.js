export default function hasValuesMatching (validator) {
  return function(props, propName, ...rest) {
    const obj = props[propName];
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const validatorError = validator(obj, key, ...rest);
      if (validatorError) return validatorError;
    }
  };
}