export default function hasValuesMatching (validator) {
  return function(props, propName, ...rest) {
    const obj = props[propName];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const validatorError = validator(obj, key, ...rest);
        if (validatorError) return validatorError;
      }
    }
  };
}