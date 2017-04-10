/*
  Import this file to automatically extend ExtendedPropTypes with the
  standalone `prop-types` library's validators.
*/

import PropTypes from "prop-types";
import ExtendedPropTypes from ".";
Object.keys(PropTypes).forEach((name) => {
  ExtendedPropTypes[name] = PropTypes[name];
});
