import makeStaticValidator from "../factories/makeStaticValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeStaticValidator(makeRegexValidator(/(^[a-z]{2}-[A-Z]{2}$)|(^[a-z]{2}$)/));