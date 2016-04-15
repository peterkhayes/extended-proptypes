import makeConfigurableValidator from "../factories/makeConfigurableValidator";
import makeChainedValidator from "../factories/makeChainedValidator";
import isPojo from "../partials/isPojo";
import hasKeysMatching from "../partials/hasKeysMatching";

export default makeConfigurableValidator(function(keyRegex) {
  return makeChainedValidator(isPojo, hasKeysMatching(keyRegex));
});