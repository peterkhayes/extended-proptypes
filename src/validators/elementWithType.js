import makeConfigurableValidator from "../factories/makeConfigurableValidator";

function getDisplayName(Component) {
  return Component.displayName ||
    Component.name ||
    (typeof Component === 'string' ? Component : 'Component');
}

export default makeConfigurableValidator(function(type) { 

  return function(props, propName) {
    const component = props[propName];

    if (component.type !== type) {
      const expected = getDisplayName(type);
      const actual = component.type ? getDisplayName(component) : JSON.stringify(component);
      return new Error(`Expected prop \`${propName}\` to be a component with type \`${expected}\`, but got ${actual}`);
    }
  };
});