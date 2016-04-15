import makeStaticValidator from "../factories/makeStaticValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeStaticValidator(makeRegexValidator(/([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i));