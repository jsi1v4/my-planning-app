import React from 'react';
import { Radio } from 'antd';

import { PT_BR, EN_US } from '../../config';

export function I18nSwitch({ value, onChange }) {
  return (
    <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
      <Radio.Button key={0} value={EN_US}>
        English
      </Radio.Button>
      <Radio.Button key={1} value={PT_BR}>
        Português
      </Radio.Button>
    </Radio.Group>
  );
}

export default I18nSwitch;
