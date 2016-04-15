import makeConfigurableValidator from "../factories/makeConfigurableValidator";
import makeChainedValidator from "../factories/makeChainedValidator";
import isCollection from "../partials/isCollection";
import hasValuesMatching from "../partials/hasValuesMatching";

export default makeConfigurableValidator(function(validator) {
  return makeChainedValidator(isCollection, hasValuesMatching(validator));
});