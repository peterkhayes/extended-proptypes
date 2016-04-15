import makeConfigurableValidator from "../factories/makeConfigurableValidator";
import makeChainedValidator from "../factories/makeChainedValidator";
import isPojo from "../partials/isPojo";
import hasKeysMatching from "../partials/hasKeysMatching";
import hasValuesMatching from "../partials/hasValuesMatching";

export default makeConfigurableValidator(function(keyRegex, valueValidator) {
  return makeChainedValidator(isPojo, hasKeysMatching(keyRegex), hasValuesMatching(valueValidator));
});