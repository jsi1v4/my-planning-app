import React from 'react';
import { compose } from 'ramda';
import { Card } from 'antd';

import { withAuth } from '../authentication';

function Home() {
  return (
    <Card bordered={false}>
      <h1 data-testid="hello">Hello World!!!</h1>
    </Card>
  );
}

export default compose(withAuth())(Home);
