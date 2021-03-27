import React, { useContext, useEffect } from 'react';
import { render } from '@testing-library/react';

import { PT_BR } from '../config';
import { I18nContext, useI18n } from './index';
import { I18nMock } from './mock';

describe('LocaleProvider provider', () => {
  const ComponentEnUS = () => {
    const t = useI18n();
    return <>{t('app_title')}</>;
  };

  const ComponentPtBR = () => {
    const { changeLang } = useContext(I18nContext);
    const t = useI18n();

    useEffect(() => {
      changeLang(PT_BR);
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
