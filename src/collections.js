import isPlainObject from "is-plain-object";
import {
  makeStaticValidator,
  makeConfigurableValidator
} from "./utils";

export const iterable = makeStaticValidator(function(props, propName) {
  const obj = props[propName];
  if (!isPlainObject(obj) && !Array.isArray(obj)) {
    return new Error(`Expected an iterable (plain object or array) for prop \`${propName}\``);
  }
});

export const iterableOf = makeConfigurableValidator(function(validator) {
  return function(props, propName) {
    const obj = props[propName];
    if (!isPlainObject(obj) && !Array.isArray(obj)) {
      return new Error(`Expected an iterable (plain object or array) for prop \`${propName}\``);
    }
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const validatorError = validator(obj, key);
      if (validatorError) return validatorError;
    }
  };
});

export const keyedObject = makeConfigurableValidator(function(keyRegex) {
  return function(props, propName) {
    const obj = props[propName];
    if (!isPlainObject(obj)) {
      return new Error(`Expected a plain object for prop \`${propName}\``);
    }
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!keyRegex.test(key)) {
        return new Error(`Expected object keys to match \`${keyRegex}\`, but got \`${key}\``);
      }
    }
  };
});

export const keyedObjectOf = makeConfigurableValidator(function(keyRegex, valueValidator) {
  return function(props, propName) {
    const obj = props[propName];
    if (!isPlainObject(obj)) {
      return new Error(`Expected a plain object for prop \`${propName}\``);
    }
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!keyRegex.test(key)) {
        return new Error(`Expected object keys to match \`${keyRegex}\`, but got \`${key}\``);
      }
      const validatorError = valueValidator(obj, key);
      if (validatorError) return validatorError;
    }
  };
});

export const mongoIdKeyedObject = keyedObject(/^[0-9a-f]{24}$/);
export const mongoIdKeyedObjectOf = keyedObjectOf.bind(null, /^[0-9a-f]{24}$/);