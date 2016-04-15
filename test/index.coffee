PropTypes = require("react").PropTypes;
require("../lib")(PropTypes);

assertValid = (propTypes, props) ->
  for propName, validator of propTypes
    if validator(props, propName)
      throw new Error("PropTypes should be satisfied by #{JSON.stringify(props)}")

assertInvalid = (propTypes, props) ->
  for propName, validator of propTypes
    return if validator(props, propName)
  throw new Error("PropTypes should not be satisfied by #{JSON.stringify(props)}")

describe "Custom PropTypes Validators", ->

  describe "stringMatching", ->

    propTypes = str: PropTypes.stringMatching /^a+$/

    it "invalid if not a string", ->
      props = str: false
      assertInvalid propTypes, props

    it "invalid if string does not match", ->
      props = str: "aaaaab"
      assertInvalid propTypes, props

    it "valid if string matches", ->
      props = str: "aaaaaaaa"
      assertValid propTypes, props

  describe "mongoId", ->
    
    propTypes = mongoId: PropTypes.mongoId

    it "invalid if not a string", ->
      props = mongoId: {}
      assertInvalid propTypes, props

    it "invalid if string doesn't match mongoId pattern", ->
      props = mongoId: "asdf"
      assertInvalid propTypes, props

    it "invalid if required and missing", ->
      requiredPropTypes =
        mongoId: PropTypes.mongoId.isRequired
      
      props = {}
      assertInvalid requiredPropTypes, props

    it "valid", ->
      props = mongoId: "53768e40d1d126f814a00866"
      assertValid propTypes, props

  describe "percent", ->

    propTypes = pct: PropTypes.percent

    it "invalid if not a percent", ->
      props = pct: "100"
      assertInvalid propTypes, props

    it "invalid if no number", ->
      props = pct: "%"
      assertInvalid propTypes, props

    it "valid if a percent", ->
      props = pct: "46%"
      assertValid propTypes, props

  describe "css length", ->

    propTypes = cssLength: PropTypes.cssLength

    it "invalid if no number", ->
      props = cssLength: "em"
      assertInvalid propTypes, props

    it "invalid if no unit", ->
      props = cssLength: "10"
      assertInvalid propTypes, props

    it "valid if a pixel value", ->
      props = cssLength: "230px"
      assertValid propTypes, props

    it "valid if an em", ->
      props = cssLength: "15em"
      assertValid propTypes, props

    it "valid if an rem", ->
      props = cssLength: "15rem"
      assertValid propTypes, props

    it "valid if an percent", ->
      props = cssLength: "50%"
      assertValid propTypes, props

  describe "css size", ->

    propTypes = cssSize: PropTypes.cssSize

    it "invalid if no number", ->
      props = cssSize: "em px %"
      assertInvalid propTypes, props

    it "invalid if no unit", ->
      props = cssSize: "10 50 21 3"
      assertInvalid propTypes, props

    it "invalid if five values", ->
      props = cssSize: "10px 20px 20px 40px 10px"
      assertInvalid propTypes, props

    it "valid if one length value", ->
      props = cssSize: "25px"
      assertValid propTypes, props

    it "valid if two values", ->
      props = cssSize: "15em 35rem"
      assertValid propTypes, props

    it "valid if three values", ->
      props = cssSize: "15rem 10% 35px"
      assertValid propTypes, props

    it "valid if four values", ->
      props = cssSize: "10px 20px 30px 40px"
      assertValid propTypes, props

  describe "color", ->

    propTypes = color: PropTypes.color

    it "invalid if not a color", ->
      props = color: "#zzzzzz"
      assertInvalid propTypes, props

    it "invalid if not a color (2)", ->
      props = color: "rgba(0.1, 0.2)"
      assertInvalid propTypes, props

    it "valid if a lowercase hex code", ->
      props = color: "#dadada"
      assertValid propTypes, props

    it "valid if an uppercase hex code", ->
      props = color: "#00CCFF"
      assertValid propTypes, props

    it "valid if an RGB", ->
      props = color: "rgb(25, 60, 32)"
      assertValid propTypes, props

    it "valid if an RGBA", ->
      props = color: "rgba(25, 60, 32, 0.6)"
      assertValid propTypes, props

  describe "emailAddress", ->

    propTypes = emailAddress: PropTypes.emailAddress

    it "invalid if not an email", ->
      props = emailAddress: "emailAddress"
      assertInvalid propTypes, props

    it "valid if an emailAddress", ->
      props = emailAddress: "peter@classdojo.com"
      assertValid propTypes, props

  describe "locale", ->

    propTypes = locale: PropTypes.locale

    it "invalid if not an email", ->
      props = locale: "e-s"
      assertInvalid propTypes, props

    it "valid if a 4-char locale", ->
      props = locale: "es-MX"
      assertValid propTypes, props

    it "valid if a 2-char locale", ->
      props = locale: "es"
      assertValid propTypes, props


  describe "time", ->
    
    propTypes = time: PropTypes.time

    it "invalid if a POJO", ->
      props = time: {foo: "bar"}
      assertInvalid propTypes, props

    it "invalid if a non-date string", ->
      props = time: "asdf"
      assertInvalid propTypes, props

    it "valid if a number", ->
      props = time: 946684800000 # year 2000
      assertValid propTypes, props

    it "valid if a timestamp string", ->
      props = time: new Date().toISOString()
      assertValid propTypes, props

    it "valid if a date", ->
      props = time: new Date()
      assertValid propTypes, props

  describe "collection", ->
    
    propTypes =
      items: PropTypes.collection

    it "invalid if neither an array nor object", ->
      props = items: "hello"

      assertInvalid propTypes, props

    it "valid if an array", ->
      props = items: [{foo: "bar"}, 1]

      assertValid propTypes, props

    it "valid if an object", ->
      props = items: {a: "b", c: "d"}

      assertValid propTypes, props

  describe "collectionOf", ->
    
    propTypes =
      items: PropTypes.collectionOf PropTypes.shape
        str: PropTypes.string.isRequired
        int: PropTypes.number

    it "invalid if neither an array nor object", ->
      props = items: "hello"

      assertInvalid propTypes, props

    it "invalid if an array has items that doesn't match schema", ->
      props = items: [{foo: "bar"}, 1]

      assertInvalid propTypes, props

    it "invalid if an object has items that doesn't match schema", ->
      props = items: {a: "b", c: "d"}

      assertInvalid propTypes, props

    it "valid if an array has items that matches schema", ->
      props = items: [{str: "bar", int: 1}, {str: "foo"}]

      assertValid propTypes, props

    it "valid if an object has items that matches schema", ->
      props = items:
        a: {str: "bar", int: 1}
        b: {str: "foo"}

      assertValid propTypes, props

  describe "mongoIdKeyedObject", ->

    propTypes =
      items: PropTypes.mongoIdKeyedObject

    it "invalid if not an object", ->
      props =
        items: [{str: "hello"}]
      
      assertInvalid propTypes, props

    it "invalid if keys are not object ids", ->
      props =
        items:
          asdf:
            str: "foo"
            int: 1
      
      assertInvalid propTypes, props

    it "valid if keys are object ids", ->
      props =
        "53768e40d1d126f814a00866": true
        "53768e40d1d126f814a00867": {foo: "bar"}

      assertValid propTypes, props

  describe "mongoIdKeyedObjectOf", ->

    propTypes =
      items: PropTypes.mongoIdKeyedObjectOf PropTypes.shape
        str: PropTypes.string.isRequired
        int: PropTypes.number

    it "invalid if not an object", ->
      props =
        items: [{str: "hello"}]
      
      assertInvalid propTypes, props

    it "invalid if keys are not object ids", ->
      props =
        items:
          asdf:
            str: "foo"
            int: 1
      
      assertInvalid propTypes, props

    it "invalid if inner validator fails", ->
      props =
        items:
          "53768e40d1d126f814a00866":
            str: 1
            int: "foo"
          "53768e40d1d126f814a00867":
            str: "bar"
      assertInvalid propTypes, props

    it "invalid if inner validator fails (2)", ->
      otherPropTypes =
        items: PropTypes.mongoIdKeyedObjectOf PropTypes.bool

      props =
        items:
          "53768e40d1d126f814a00866": "true"
          "53768e40d1d126f814a00867":  false

      assertInvalid otherPropTypes, props

    it "invalid if required and missing", ->
      requiredPropTypes =
        items: PropTypes.mongoIdKeyedObjectOf(PropTypes.bool).isRequired

      props = {}

      assertInvalid requiredPropTypes, props

    it "valid", ->
      props =
        items:
          "53768e40d1d126f814a00866":
            str: "foo"
            int: 1
          "53768e40d1d126f814a00867":
            str: "bar"
      assertValid propTypes, props

    it "valid (2)", ->
      otherPropTypes =
        items: PropTypes.mongoIdKeyedObjectOf PropTypes.bool

      props =
        items:
          "53768e40d1d126f814a00866": true
          "53768e40d1d126f814a00867": false

      assertValid otherPropTypes, props





