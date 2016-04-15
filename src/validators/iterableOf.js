import makeConfigurableValidator from "../factories/makeConfigurableValidator";
import makeChainedValidator from "../factories/makeChainedValidator";
import isIterable from "../partials/isIterable";
import hasValuesMatching from "../partials/hasValuesMatching";

export default makeConfigurableValidator(function(validator) {
  return makeChainedValidator(isIterable, hasValuesMatching(validator));
});