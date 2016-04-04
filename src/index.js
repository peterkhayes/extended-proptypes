import * as primatives from "./primatives";
import * as collections from "./collections";

module.exports = function (PropTypes) {
  Object.keys(primatives).forEach((key) => PropTypes[key] = primatives[key]);
  Object.keys(collections).forEach((key) => PropTypes[key] = collections[key]);
  return PropTypes;
};