import React from 'react';
import { Card } from 'antd';

function Home() {
  return (
    <Card bordered={false}>
      <h1 data-testid="hello">Hello World!!!</h1>
    </Card>
  );
}

export default Home;
