# Extended Prop Types
Useful proptypes for React components.  Developed for and tested on ClassDojo's web app.

## Usage
Call the exported function on the standard React `proptypes` object.
```js
import {PropTypes} from "react";
import ExtendPropTypes from "extended-proptypes";

ExtendPropTypes(PropTypes);
```

New options will now be available on React's `PropTypes` export.
```js
import {Component, PropTypes} from "react";

class MyComponent extends Component {
  
  static propTypes = {
    myDate: PropTypes.date,
    mySatanicString: PropTypes.stringMatching(/^6+$/).isRequired,
    myArrayOrObject: PropTypes.iterableOf(PropTypes.bool),
  };
}

```

## New Prop Types

All validators expose basic and `isRequired` versions.

### Collections
- `iterable`: An array or an object.
- `iterableOf(validator)`: An array or object whose values match the provided validator.
- `keyedObject(regex)`: An object whose keys match the provided regex.
- `keyedObjectOf(regex, validator)`: An object whose keys match the provided regex and whose values match the provided validator.

### General Primatives
- `stringMatching(regex)`: A string that matches the provided regex.
- `stringWithLength(min, max=Infinity)`: A string with length between min and max.
- `time`: A value parsable by `new Date()`.
- `uuid`: A uuid string.
- `locale`: A locale string, like `en-US` or `jp`
- `emailAddress`: An email address (regex taken from the highest-upvoted SO answer)

### CSS
- `percent`: A percentage.
- `cssLength`: A single css length, like `24px`, `43%` or `4rem`.
- `cssSize`: Between 1 and 4 css sizes.
- `color`: A hex or rgb(a) string

### MongoDB-specific
- `mongoId`: A 24-character hex string.
- `mongoIdKeyedObject`: An object whose keys are mongo ids.
- `mongoIdKeyedObjectOf(validator)`: An object whose keys are mongo ids and whose values match the provided validator.

## Upcoming
- Single exports
- Use without extending