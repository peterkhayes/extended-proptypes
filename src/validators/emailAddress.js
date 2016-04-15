import makeStaticValidator from "../factories/makeStaticValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeStaticValidator(makeRegexValidator(/^(?=\S{3,128}$)[^\s\\;,:]+@[^\s\\;,:\.]{1}[^\s\\;,:]*\.[^\s\\;,:0-9]+$/));