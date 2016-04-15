export default function hasValuesMatching (keyRegex) {
  return function(props, propName) {
    const obj = props[propName];
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!keyRegex.test(key)) {
        return new Error(`Expected object keys to match \`${keyRegex}\`, but got \`${key}\``);
      }
    }
  };
}