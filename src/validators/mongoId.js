import makeStaticValidator from "../factories/makeStaticValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeStaticValidator(makeRegexValidator(/^[0-9a-f]{24}$/));