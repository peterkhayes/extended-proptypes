export default function makeChainedValidator (...validators) {
  return function(...args) {
    for (let i = 0; i < validators.length; i++) {
      const result = validators[i](...args);
      if (result) return result;
    }
  };
}