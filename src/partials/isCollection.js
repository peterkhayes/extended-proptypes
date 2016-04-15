import isPojo from "../utils/isPojo";

export default function isCollection (props, propName) {
  const obj = props[propName];
  if (!isPojo(obj) && !Array.isArray(obj)) {
    return new Error(`Expected an collection (plain object or array) for prop \`${propName}\``);
  }
}