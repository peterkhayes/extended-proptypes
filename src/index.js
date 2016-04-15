import collection           from "./validators/collection";
import collectionOf         from "./validators/collectionOf";
import color                from "./validators/color";
import cssLength            from "./validators/cssLength";
import cssSize              from "./validators/cssSize";
import emailAddress         from "./validators/emailAddress";
import hex                  from "./validators/hex";
import iterable             from "./validators/iterable";
import iterableOf           from "./validators/iterableOf";
import keyedObject          from "./validators/keyedObject";
import keyedObjectOf        from "./validators/keyedObjectOf";
import locale               from "./validators/locale";
import mongoId              from "./validators/mongoId";
import mongoIdKeyedObject   from "./validators/mongoIdKeyedObject";
import mongoIdKeyedObjectOf from "./validators/mongoIdKeyedObjectOf";
import percent              from "./validators/percent";
import stringMatching       from "./validators/stringMatching";
import stringWithLength     from "./validators/stringWithLength";
import time                 from "./validators/time";
import uuid                 from "./validators/uuid";

const validators = {
  collection,
  collectionOf,
  color,
  cssLength,
  cssSize,
  emailAddress,
  hex,
  iterable,
  iterableOf,
  keyedObject,
  keyedObjectOf,
  locale,
  mongoId,
  mongoIdKeyedObject,
  mongoIdKeyedObjectOf,
  percent,
  stringMatching,
  stringWithLength,
  time,
  uuid,
};

function extendWithPropTypes (target) {
  Object.keys(validators).forEach((name) => {
    target[name] = validators[name];
  });
}

extendWithPropTypes(extendWithPropTypes);

module.exports = extendWithPropTypes;