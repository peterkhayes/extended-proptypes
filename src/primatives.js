import {
  makeRegexValidator,
  makeStaticValidator,
  makeConfigurableValidator
} from "./utils";

export const mongoId = makeStaticValidator(makeRegexValidator(/^[0-9a-f]{24}$/));
export const uuid = makeStaticValidator(makeRegexValidator(/([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i));
export const percent = makeStaticValidator(makeRegexValidator(/^[-+]?[0-9]+\.?[0-9]*\%$/));
export const cssLength = makeStaticValidator(makeRegexValidator(/^[-+]?[0-9]+\.?[0-9]*(px|r?em|\%)$/));
export const cssSize = makeStaticValidator(makeRegexValidator(/^([-+]?[0-9]+\.?[0-9]*(px|r?em|\%))(\s[-+]?[0-9]+\.?[0-9]*(px|em|rem|\%)){0,3}$/));
export const color = makeStaticValidator(makeRegexValidator(/^(rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)|#[0-9a-fA-F]{6})$/i));
export const locale = makeStaticValidator(makeRegexValidator(/(^[a-z]{2}-[A-Z]{2}$)|(^[a-z]{2}$)/));
export const emailAddress = makeStaticValidator(makeRegexValidator(/^(?=\S{3,128}$)[^\s\\;,:]+@[^\s\\;,:\.]{1}[^\s\\;,:]*\.[^\s\\;,:0-9]+$/));

export const stringMatching = makeConfigurableValidator(makeRegexValidator);
export const stringWithLength = makeConfigurableValidator(function(min, max) {
  if (!(min instanceof Number)) throw new Error("Must provide a number as the min length for a stringWithLength validator");
  if (max != null && !(max instanceof Number)) throw new Error("Must provide a number (or null) as the max length for a stringWithLength validator");
  return function(props, propName) {
    const str = props[propName];
    if (str.length < min || str.length > max) {
      return new Error(`Expected prop \`${propName}\` to have length between ${min} and ${max} but got \`${str}\``);
    }
  };
});

export const time = makeStaticValidator(function(props, propName) {
  const val = props[propName];
  if (new Date(val).toString() === "Invalid Date") {
    return new Error(`Expected a parsable date for prop \`${propName}\`, but got \`${val}\` instead`);
  }
});