import React from 'react';

/**
 * Wrap up Components
 * @param JSX.Element[] sequence of elements
 * @return wrapper (first element as father and others as children)
 */
export function wrapse(...components) {
  return components.reduceRight(
    (Wrapper, Comp) => ({ children }) => (
      <Wrapper>
        <Comp>{children}</Comp>
      </Wrapper>
    ),
    ({ children }) => <>{children}</>
  );
}

export default {
  wrapse
};
