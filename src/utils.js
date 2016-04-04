// Takes a validator and returns one that passes if no prop is defined.
export function makeOptionalValidator (validator) {
  return function(props, propName, componentName, location) {
    if (props[propName] == null) {
      return null;
    } else {
      return validator(props, propName, componentName, location);
    }
  };
}

// Takes a validator and returns one that fails if no prop is defined.
export function makeRequiredValidator (validator) {
  return function(props, propName, componentName, location) {
    if (props[propName] == null) {
      return new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\``);
    } else {
      return validator(props, propName, componentName, location);
    }
  };
}

// Takes a static validator (i.e. PropTypes.bool, PropTypes.func)
// and returns optional and required versions. 
export function makeStaticValidator (validator) {
  const output = makeOptionalValidator(validator);
  output.isRequired = makeRequiredValidator(validator);
  return output;
}
// Takes a dynamic validator (i.e. PropTypes.shape(...), PropTypes.oneOf(...))
// and returns optional and required versions.
export function makeConfigurableValidator (validatorFactory) {
  return function() {
    const validator = validatorFactory.apply(null, arguments);
    const output = makeOptionalValidator(validator);
    output.isRequired = makeRequiredValidator(validator);
    return output;
  };
}

// Takes a regex and returns a validator for it.
export function makeRegexValidator (regex) {
  if (!(regex instanceof RegExp)) throw new Error("Must provide a regular expression for a regex validator");
  return function(props, propName) {
    const str = props[propName];
    if (!regex.test(str)) {
      return new Error(`Expected prop \`${propName}\` to match \`${regex.toString()}\` but got \`${str}\``);
    }
  };
}