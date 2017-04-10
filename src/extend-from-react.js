/*
  Import this file to automatically extend ExtendedPropTypes with React's
  built-in proptypes.
*/

import {PropTypes} from "react";
import ExtendedPropTypes from ".";
Object.keys(PropTypes).forEach((name) => {
  ExtendedPropTypes[name] = PropTypes[name];
});
