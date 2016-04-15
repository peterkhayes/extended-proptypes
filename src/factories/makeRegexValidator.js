export default function makeRegexValidator (regex) {
  if (!(regex instanceof RegExp)) throw new Error("Must provide a regular expression for a regex validator");
  return function(props, propName) {
    const str = props[propName];
    if (!regex.test(str)) {
      return new Error(`Expected prop \`${propName}\` to match \`${regex.toString()}\` but got \`${str}\``);
    }
  };
}