import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 14px;
    --font-size-lg: var(--font-size-base) + 2px;
    --font-size-sm: 12px;
    --heading-1-size: ceil(var(--font-size-base) * 2.71);
    --heading-2-size: ceil(var(--font-size-base) * 2.14);
    --heading-3-size: ceil(var(--font-size-base) * 1.71);
    --heading-4-size: ceil(var(--font-size-base) * 1.42);
    --heading-5-size: ceil(var(--font-size-base) * 1.14);

    --font-weight-light: 300;
    --font-weight-base: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --line-height-base: 1.5715;
    --border-radius-base: 2px;
    --border-radius-sm: var(--border-radius-base);
    --border-radius-lg: 10px;

    --padding-lg: 24px; // containers
    --padding-md: 16px; // small containers and buttons
    --padding-sm: 12px; // Form controls and items
    --padding-xs: 8px; // small items
    --padding-xss: 4px; // more small

    --margin-lg: 24px; // containers
    --margin-md: 16px; // small containers and buttons
    --margin-sm: 12px; // Form controls and items
    --margin-xs: 8px; // small items
    --margin-xss: 4px; // more small

    --height-base: 32px;
    --height-lg: 40px;
    --height-sm: 24px;

    --border-color: #303030;
    --font-color-link: #177ddc;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-base);
  }

  table th {
    font-weight: var(--font-weight-semibold) !important;
  }
`;

export default GlobalStyles;
