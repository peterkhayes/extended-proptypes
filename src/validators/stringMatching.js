import makeConfigurableValidator from "../factories/makeConfigurableValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeConfigurableValidator(makeRegexValidator);