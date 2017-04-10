[![Build Status](https://travis-ci.org/peterkhayes/extended-proptypes.svg?branch=master)](https://travis-ci.org/peterkhayes/extended-proptypes)  [![Coverage Status](https://coveralls.io/repos/github/peterkhayes/extended-proptypes/badge.svg?branch=master)](https://coveralls.io/github/peterkhayes/extended-proptypes?branch=master)
# Extended Prop Types

Useful proptypes for React components.  Developed for and tested on ClassDojo's web app.

## Usage
This module exports a set of proptype validators.
```js
import ExtendedPropTypes from "extended-proptypes";

class MyComponent extends Component {

  static propTypes = {
    myDate: ExtendedPropTypes.date.isRequired,
    mySatanicString: ExtendedPropTypes.stringMatching(/^6+$/).isRequired,
  };
}
```

If you only need a few of the provided functions, individual validators can be imported under `/lib/validators`.
```js
import keyedObject from "extended-proptypes/lib/validators/keyedObject";

class MyComponent extends Component {

  static propTypes = {
    mySpecialObject: keyedObject(/keyregex/).isRequired,
  };
}
```

It may be convenient to not have to reference both the original proptypes object and also this one. To resolve this, you can use one of two methods:
  * `extended-proptypes/lib/extend-from-react` imports `{PropTypes}` from `react` and adds all of its methods to this module's export.
  * `extended-proptypes/lib/extend-from-standalone` imports `PropTypes` from `prop-types` and adds all of its methods to this module's export.

```js
import `extended-proptypes/lib/extend-from-react`;
import PropTypes from "extended-proptypes";

class MyComponent extends Component {

  static propTypes = {
    myEmailAddress: PropTypes.emailAddress.isRequired,
    myArrayOrObject: PropTypes.collectionOf(PropTypes.bool),
  };
}
```

When `NODE_ENV === "production"`, since React will not validate PropTypes, this method exports stubbed versions of each validator.

## New Prop Types

All validators expose basic and `isRequired` versions.

### React:
- `elementWithType(Type)`: A react element matching the provided type, which may be a class or a function.

### Collections
- `collection`: An array or a plain object.
- `collectionOf(validator)`: An array or a plain object whose values match the provided validator.
- `keyedObject(regex)`: An object whose keys match the provided regex.
- `keyedObjectOf(regex, validator)`: An object whose keys match the provided regex and whose values match the provided validator.
- `iterable`: An iterable. Errors if enviroment does not support symbols.

### General Primatives
- `constant(val)`: The provided val, only.
- `primative`: a number, a string, or a boolean.
- `stringMatching(regex)`: A string that matches the provided regex.
- `stringWithLength(min, max=Infinity)`: A string with length between min and max, inclusive. If only one argument is provided, requires exactly that length.
- `hex`: A string consisting of hex characters, with an optional 0x at the beginning.
- `date`: A date object.
- `dateBetween(min, max=Infinity)`: A date object which is within the provided interval.
- `time`: A value parsable by `new Date()`.
- `timeBetween(min, max=Infinity)`: A value parsable by `new Date()` which is within the provided interval.
- `uuid`: A uuid string (e.g. `123e4567-e89b-12d3-a456-426655440000`).
- `locale`: A locale string, like `en-US` or `jp`.
- `emailAddress`: An email address (regex taken from the highest-upvoted SO answer).

### CSS
- `percent`: A percentage.
- `cssLength`: A single css length, like `24px`, `43%` or `4rem`.
- `cssSize`: Between 1 and 4 css lengths.
- `color`: A hex or rgb(a) string

### MongoDB-specific
- `mongoId`: A 24-character hex string.
- `mongoIdKeyedObject`: An object whose keys are mongo ids.
- `mongoIdKeyedObjectOf(validator)`: An object whose keys are mongo ids and whose values match the provided validator.