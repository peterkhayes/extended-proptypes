export default function isIterable (props, propName) {
  const obj = props[propName];
  if (typeof Symbol === "undefined") {
    return new Error("Your environment does not support iterators");
  } else if (!obj || typeof obj[Symbol.iterator] !== 'function') {
    return new Error(`Expected an iterable for prop \`${propName}\``);
  }
}