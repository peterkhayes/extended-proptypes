const PropTypes = require("react").PropTypes;
require("../src")(PropTypes);

function assertValid (propTypes, props) {
  Object.keys(propTypes).forEach((propName) => {
    const validator = propTypes[propName];
    if (validator(props, propName) instanceof Error) {
      throw new Error(`PropTypes should be satisfied by ${JSON.stringify(props)}`);
    }
  });
}

function assertInvalid (propTypes, props) {
  Object.keys(propTypes).forEach((propName) => {
    const validator = propTypes[propName];
    if (!(validator(props, propName) instanceof Error)) {
      throw new Error(`PropTypes should not be satisfied by ${JSON.stringify(props)}`);
    }
  });
}

describe("Custom PropTypes Validators", () => {

  describe("stringMatching", () => {

    const propTypes = {str: PropTypes.stringMatching(/^a+$/)};

    it("invalid if not a string", () => {
      const props = {str: false};
      assertInvalid(propTypes, props);
    });

    it("invalid if string does not match", () => {
      const props = {str: "aaaaab"};
      assertInvalid(propTypes, props);
    });

    it("valid if string matches", () => {
      const props = {str: "aaaaaaaa"};
      assertValid(propTypes, props);
    });
  });

  describe("mongoId", () => {
    
    const propTypes = {mongoId: PropTypes.mongoId};

    it("invalid if not a string", () => {
      const props = {mongoId: {}};
      assertInvalid(propTypes, props);
    });

    it("invalid if string doesn't match mongoId pattern", () => {
      const props = {mongoId: "asdf"};
      assertInvalid(propTypes, props);
    });

    it("invalid if required and missing", () => {
      const requiredPropTypes = {mongoId: PropTypes.mongoId.isRequired};
      const props = {};
      assertInvalid(requiredPropTypes, props);
    });

    it("valid", () => {
      const props = {mongoId: "53768e40d1d126f814a00866"};
      assertValid(propTypes, props);
    });

  });

  describe("percent", () => {

    const propTypes = {pct: PropTypes.percent};

    it("invalid if not a percent", () => {
      const props = {pct: "100"};
      assertInvalid(propTypes, props);
    });

    it("invalid if no number", () => {
      const props = {pct: "%"};
      assertInvalid(propTypes, props);
    });

    it("valid if a percent", () => {
      const props = {pct: "46%"};
      assertValid(propTypes, props);
    });
  });

  describe("css length", () => {

    const propTypes = {cssLength: PropTypes.cssLength};

    it("invalid if no number", () => {
      const props = {cssLength: "em"};
      assertInvalid(propTypes, props);
    });

    it("invalid if no unit", () => {
      const props = {cssLength: "10"};
      assertInvalid(propTypes, props);
    });

    it("valid if a pixel value", () => {
      const props = {cssLength: "230px"};
      assertValid(propTypes, props);
    });

    it("valid if an em", () => {
      const props = {cssLength: "15em"};
      assertValid(propTypes, props);
    });

    it("valid if an rem", () => {
      const props = {cssLength: "15rem"};
      assertValid(propTypes, props);
    });

    it("valid if an percent", () => {
      const props = {cssLength: "50%"};
      assertValid(propTypes, props);
    });
  });

  describe("css size", () => {

    const propTypes = {cssSize: PropTypes.cssSize};

    it("invalid if no number", () => {
      const props = {cssSize: "em px %"};
      assertInvalid(propTypes, props);
    });

    it("invalid if no unit", () => {
      const props = {cssSize: "10 50 21 3"};
      assertInvalid(propTypes, props);
    });

    it("invalid if five values", () => {
      const props = {cssSize: "10px 20px 20px 40px 10px"};
      assertInvalid(propTypes, props);
    });

    it("valid if one length value", () => {
      const props = {cssSize: "25px"};
      assertValid(propTypes, props);
    });

    it("valid if two values", () => {
      const props = {cssSize: "15em 35rem"};
      assertValid(propTypes, props);
    });

    it("valid if three values", () => {
      const props = {cssSize: "15rem 10% 35px"};
      assertValid(propTypes, props);
    });

    it("valid if four values", () => {
      const props = {cssSize: "10px 20px 30px 40px"};
      assertValid(propTypes, props);
    });
  });

  describe("color", () => {

    const propTypes = {color: PropTypes.color};

    it("invalid if not a color", () => {
      const props = {color: "#zzzzzz"};
      assertInvalid(propTypes, props);
    });

    it("invalid if not a color (2)", () => {
      const props = {color: "rgba(0.1, 0.2)"};
      assertInvalid(propTypes, props);
    });

    it("valid if a lowercase hex code", () => {
      const props = {color: "#dadada"};
      assertValid(propTypes, props);
    });

    it("valid if an uppercase hex code", () => {
      const props = {color: "#00CCFF"};
      assertValid(propTypes, props);
    });

    it("valid if an RGB", () => {
      const props = {color: "rgb(25, 60, 32)"};
      assertValid(propTypes, props);
    });

    it("valid if an RGBA", () => {
      const props = {color: "rgba(25, 60, 32, 0.6)"};
      assertValid(propTypes, props);
    });

  });
  describe("emailAddress", () => {

    const propTypes = {emailAddress: PropTypes.emailAddress};

    it("invalid if not an email", () => {
      const props = {emailAddress: "emailAddress"};
      assertInvalid(propTypes, props);
    });

    it("valid if an emailAddress", () => {
      const props = {emailAddress: "peter@classdojo.com"};
      assertValid(propTypes, props);
    });
  });

  describe("locale", () => {

    const propTypes = {locale: PropTypes.locale};

    it("invalid if not an email", () => {
      const props = {locale: "e-s"};
      assertInvalid(propTypes, props);
    });

    it("valid if a 4-char locale", () => {
      const props = {locale: "es-MX"};
      assertValid(propTypes, props);
    });

    it("valid if a 2-char locale", () => {
      const props = {locale: "es"};
      assertValid(propTypes, props);
    });
  });  

  describe("time", () => {
    
    const propTypes = {time: PropTypes.time};

    it("invalid if a POJO", () => {
      const props = {time: {foo: "bar"}};
      assertInvalid(propTypes, props);
    });

    it("invalid if a non-date string", () => {
      const props = {time: "asdf"};
      assertInvalid(propTypes, props);
    });

    it("valid if a number", () => {
      const props = {time: 946684800000}; // year 2000
      assertValid(propTypes, props);
    });

    it("valid if a timestamp string", () => {
      const props = {time: new Date().toISOString()};
      assertValid(propTypes, props);
    });

    it("valid if a date", () => {
      const props = {time: new Date()};
      assertValid(propTypes, props);
    });
  });

  describe("collection", () => {
    
    const propTypes = {items: PropTypes.collection};

    it("invalid if neither an array nor object", () => {
      const props = {items: "hello"};

      assertInvalid(propTypes, props);
    });

    it("valid if an array", () => {
      const props = {items: [{foo: "bar"}, 1]};

      assertValid(propTypes, props);
    });

    it("valid if an object", () => {
      const props = {items: {a: "b", c: "d"}};

      assertValid(propTypes, props);
    });
  });

  describe("collectionOf", () => {
    
    const propTypes = {
      items: PropTypes.collectionOf(PropTypes.shape({
        str: PropTypes.string.isRequired,
        int: PropTypes.number,
      }))
    };

    it("invalid if neither an array nor object", () => {
      const props = {items: "hello"};

      assertInvalid(propTypes, props);
    });

    it("invalid if an array has items that doesn't match schema", () => {
      const props = {items: [{foo: "bar"}, 1]};

      assertInvalid(propTypes, props);
    });

    it("invalid if an object has items that doesn't match schema", () => {
      const props = {items: {a: "b", c: "d"}};

      assertInvalid(propTypes, props);
    });

    it("valid if an array has items that matches schema", () => {
      const props = {items: [{str: "bar", int: 1}, {str: "foo"}]};

      assertValid(propTypes, props);
    });

    it("valid if an object has items that matches schema", () => {
      const props = {
        items: {
          a: {str: "bar", int: 1},
          b: {str: "foo"},
        }
      };

      assertValid(propTypes, props);
    });
  });

  describe("mongoIdKeyedObject", () => {

    const propTypes = {items: PropTypes.mongoIdKeyedObject};

    it("invalid if not an object", () => {
      const props = {items: [{str: "hello"}]};
      
      assertInvalid(propTypes, props);
    });

    it("invalid if keys are not object ids", () => {
      const props = {
        items: {
          asdf: {
            str: "foo",
            int: 1
          }
        }
      };
      
      assertInvalid(propTypes, props);
    });

    it("valid if keys are object ids", () => {
      const props = {
        "53768e40d1d126f814a00866": true,
        "53768e40d1d126f814a00867": {foo: "bar"}
      };

      assertValid(propTypes, props);
    });
  });

  describe("mongoIdKeyedObjectOf", () => {

    const propTypes = {
      items: PropTypes.mongoIdKeyedObjectOf(PropTypes.shape({
        str: PropTypes.string.isRequired,
        int: PropTypes.number,
      }))
    };

    it("invalid if not an object", () => {
      const props = {items: [{str: "hello"}]};
      
      assertInvalid(propTypes, props);
    });

    it("invalid if keys are not object ids", () => {
      const props = {
        items: {
          asdf: {
            str: "foo",
            int: 1
          }
        }
      };
      
      assertInvalid(propTypes, props);
    });

    it("invalid if inner validator fails", () => {
      const props = {
        items: {
          "53768e40d1d126f814a00866": {
            str: 1,
            int: "foo"
          },
          "53768e40d1d126f814a00867": {
            str: "bar"
          }
        }
      };
      assertInvalid(propTypes, props);
    });

    it("invalid if inner validator fails (2)", () => {
      const otherPropTypes = {items: PropTypes.mongoIdKeyedObjectOf(PropTypes.bool)};

      const props = {
        items: {
          "53768e40d1d126f814a00866": "true",
          "53768e40d1d126f814a00867": false
        }
      };

      assertInvalid(otherPropTypes, props);
    });

    it("invalid if required and missing", () => {
      const requiredPropTypes = {items: PropTypes.mongoIdKeyedObjectOf(PropTypes.bool).isRequired};

      const props = {};

      assertInvalid(requiredPropTypes, props);
    });

    it("valid", () => {
      const props = {
        items: {
          "53768e40d1d126f814a00866": {
            str: "foo",
            int: 1
          },
          "53768e40d1d126f814a00867": {
            str: "bar"
          }
        }
      };
      assertValid(propTypes, props);
    });

    it("valid (2)", () => {
      const otherPropTypes = {
        items: PropTypes.mongoIdKeyedObjectOf(PropTypes.bool)
      };

      const props = {
        items: {
          "53768e40d1d126f814a00866": true,
          "53768e40d1d126f814a00867": false
        }
      };

      assertValid(otherPropTypes, props);
    });
  });
});
