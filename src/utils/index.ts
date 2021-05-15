import { createElement } from 'react';

/**
 * Wrap up Components
 * @param JSX.Element[] sequence of elements
 * @return wrapper (first element as father and others as children)
 */
export function wrapse(...comps) {
  return comps.reduceRight((wrap, comp) => ({ children }) =>
    createElement(wrap, null, createElement(comp, null, children))
  );
}

export default {
  wrapse
};
