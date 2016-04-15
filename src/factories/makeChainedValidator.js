export default function makeChainedValidator (...validators) {
  return function(props, propName, componentName, location) {
    for (let i = 0; i < validators.length; i++) {
      const result = validators[i](props, propName, componentName, location);
      if (result) return result;
    }
  };
}