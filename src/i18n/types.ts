export enum Locale {
  EN_US = 'en',
  PT_BR = 'pt'
}

export interface II18nContext {
  lang: Locale;
  changeLang: (value: Locale) => void;
}
