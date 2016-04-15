import makeStaticValidator from "../factories/makeStaticValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeStaticValidator(makeRegexValidator(/^([-+]?[0-9]+\.?[0-9]*(px|r?em|\%))(\s[-+]?[0-9]+\.?[0-9]*(px|em|rem|\%)){0,3}$/));