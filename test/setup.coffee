# PropType errors are only warned, not thrown.
# This helper will make our tests run as expected
console.warn = (args...) ->
  throw new Error args.join " "