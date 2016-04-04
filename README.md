# Extended Prop Types
Custom validators for react components.  This library should be used instead of the default React one.

## New Prop Types
- `objectId`: Asserts prop is a mongo ObjectId.

- `time`: Asserts prop is a date object, number, or parseable string.

- `iterable`: Asserts prop is an array or plain object.

- `iterableOf(validator)`: Asserts prop is an array or plain object whose values match the given validator.

- `indexedObject`: Asserts prop is an object whose keys are object ids.

- `indexedObjectOf(validator)`: Asserts prop is an object whose keys are object ids and whose values match the given validator.