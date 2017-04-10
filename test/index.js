const fs                = require("fs");
const assert            = require("assert");
const path              = require("path");

const requireUncached   = require("require-uncached");
const validators = fs.readdirSync(path.join(__dirname, "../src/validators")).map((f) => f.replace(".js", ""));

describe("index file", () => {

  describe("in production", () => {

    beforeEach(() => process.env.NODE_ENV = "production")
    afterEach(() => process.env.NODE_ENV = "testing");

    it("exports noops", () => {
      const ExtendedPropTypes = requireUncached("../src");
      validators.forEach((name) => {
        const actual = requireUncached(`../src/validators/${name}`);
        assert(ExtendedPropTypes[name], `did not export ${name}`);
        assert(ExtendedPropTypes[name].toString() !== actual.toString(), `exported real validator for ${name}`);
        ExtendedPropTypes[name]();
      });
    });
  });

  describe("in development", () => {

    beforeEach(() => process.env.NODE_ENV = "dev");
    afterEach(() => process.env.NODE_ENV = "testing");

    it("exports each proptype", () => {
      const ExtendedPropTypes = requireUncached("../src");
      validators.forEach((name) => {
        const actual = requireUncached(`../src/validators/${name}`);
        assert(ExtendedPropTypes[name], `did not export ${name}`);
        assert(ExtendedPropTypes[name].toString() === actual.toString(), `exported stub for ${name}`);
      });
    });
  });

  // NOTE: THIS SECTION MUST BE LAST
  describe("extend scripts", () => {

    it("extend-from-react", () => {
      const ReactPropTypes = require("react").PropTypes;
      const StandalonePropTypes = require("prop-types");
      const ExtendedPropTypes = require("../src");

      require("../src/extend-from-react");
      Object.keys(ReactPropTypes).forEach((name) => {
        assert(ExtendedPropTypes[name] === ReactPropTypes[name], `did not export ${name} from react`);
        assert(ExtendedPropTypes[name] !== StandalonePropTypes[name], `exported ${name} from prop-types`);
      });
    });

    it("extend-from-standalone", () => {
      const ReactPropTypes = require("react").PropTypes;
      const StandalonePropTypes = require("prop-types");
      const ExtendedPropTypes = require("../src");

      require("../src/extend-from-standalone");
      Object.keys(ReactPropTypes).forEach((name) => {
        assert(ExtendedPropTypes[name] !== ReactPropTypes[name], `exported ${name} from react`);
        assert(ExtendedPropTypes[name] === StandalonePropTypes[name], `did not export ${name} from prop-types`);
      });
    });
  });
});