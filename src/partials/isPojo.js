import _isPojo from "../utils/isPojo";

export default function isPojo (props, propName) {
  const obj = props[propName];
  if (!_isPojo(obj)) {
    return new Error(`Expected a plain object for prop \`${propName}\``);
  }
}