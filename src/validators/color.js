import makeStaticValidator from "../factories/makeStaticValidator";
import makeRegexValidator from "../factories/makeRegexValidator";

export default makeStaticValidator(makeRegexValidator(/^(rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)|#[0-9a-fA-F]{6})$/i));