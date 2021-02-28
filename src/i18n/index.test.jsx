import React from 'react';
import { render } from '@testing-library/react';

import { EN_US, PT_BR } from '../config';
import { LocaleConfig, useI18n } from './index';

describe('LocaleConfig provider', () => {
  const Component = () => {
    const t = useI18n();
    return <>{t('app_title')}</>;
  };

  it('should display en US lang', async () => {
    const { getByText } = render(
      <LocaleConfig lang={EN_US}>
        <Component />
      </LocaleConfig>
    );
    expect(getByText('Finances Management').innerHTML).toBeDefined();
  });

  it('should display pt BR lang', async () => {
    const { getByText } = render(
      <LocaleConfig lang={PT_BR}>
        <Component />
      </LocaleConfig>
    );
    expect(getByText('Gerenciador de finanças').innerHTML).toBeDefined();
  });
});
