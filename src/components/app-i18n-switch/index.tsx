import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import { useI18n } from 'src/i18n';
import { Locale } from 'src/i18n/types';

export function I18nSwitch() {
  const { lang, changeLang } = useI18n();

  const handleRadio = (e: RadioChangeEvent) => {
    changeLang(e.target.value);
  };

  return (
    <Radio.Group value={lang} onChange={handleRadio}>
      <Radio.Button key={0} value={Locale.EN_US}>
        English
      </Radio.Button>
      <Radio.Button key={1} value={Locale.PT_BR}>
        Português
      </Radio.Button>
    </Radio.Group>
  );
}

export default I18nSwitch;
