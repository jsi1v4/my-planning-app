import React from 'react';
import { compose } from 'ramda';

import { withAuth } from 'src/authentication';

function Sheet() {
  return <></>;
}

export default compose(withAuth())(Sheet);
