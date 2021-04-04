import React, { useEffect } from 'react';
import { render } from '@testing-library/react';

import { Locale } from './types';
import { I18nMock } from './mock';
import { useI18n, useI18nMessage } from './index';

describe('LocaleProvider provider', () => {
  const ComponentEnUS = () => {
    const t = useI18nMessage();
    return <>{t('app_title')}</>;
  };

  const ComponentPtBR = () => {
    const { changeLang } = useI18n();
    const t = useI18nMessage();

    useEffect(() => {
      changeLang(Locale.PT_BR);
    }, [changeLang]);

    return <>{t('app_title')}</>;
  };

  it('should display en US lang', async () => {
    const { getByText } = render(<ComponentEnUS />, {
      wrapper: I18nMock
    });
    expect(getByText('Finances Management').innerHTML).toBeDefined();
  });

  it('should display pt BR lang', async () => {
    const { getByText } = render(<ComponentPtBR />, {
      wrapper: I18nMock
    });
    expect(getByText('Gerenciador de finanças').innerHTML).toBeDefined();
  });
});
