exports.assertValid = function assertValid (propTypes, props) {
  Object.keys(propTypes).forEach((propName) => {
    const validator = propTypes[propName];
    if (validator(props, propName) instanceof Error) {
      throw new Error(`PropTypes should be satisfied by ${JSON.stringify(props)}`);
    }
  });
};

exports.assertInvalid = function assertInvalid (propTypes, props) {
  Object.keys(propTypes).forEach((propName) => {
    const validator = propTypes[propName];
    if (!(validator(props, propName) instanceof Error)) {
      throw new Error(`PropTypes should not be satisfied by ${JSON.stringify(props)}`);
    }
  });
};