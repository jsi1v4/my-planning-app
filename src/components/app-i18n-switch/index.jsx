import React, { useContext } from 'react';
import { Radio } from 'antd';

import { PT_BR, EN_US } from '../../config';
import { I18nContext } from '../../i18n';

export function I18nSwitch() {
  const { lang, changeLang } = useContext(I18nContext);

  return (
    <Radio.Group value={lang} onChange={(e) => changeLang(e.target.value)}>
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
