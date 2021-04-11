import { useIntl } from 'react-intl';

function fixMonthStr(value: string) {
  const name = String(value).replace('.', '').split('');
  return name[0].toUpperCase() + name.splice(1).join('');
}

export function useFormatter() {
  const { formatNumber, formatDate } = useIntl();

  const numericFormatter = (value?: number | string) =>
    formatNumber(Number(value) || 0, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

  const decimalFormatter = (value?: number | string) =>
    formatNumber(Number(value) || 0, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });

  const currencyFormatter = (value?: number | string) =>
    formatNumber(Number(value) || 0, {
      format: 'currency',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });

  const percentFormatter = (value?: number | string) =>
    formatNumber(Number(value) / 100 || 0, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });

  const dateFormatter = (value?: string | Date) =>
    formatDate(value, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

  const dayFormatter = (value?: string | Date) =>
    formatDate(value, {
      day: '2-digit'
    });

  const monthFormatter = (value?: string | Date) =>
    fixMonthStr(formatDate(value, { month: 'short' }));

  const monthLongFormatter = (value?: string | Date) =>
    fixMonthStr(formatDate(value, { month: 'long' }));

  const yearFormatter = (value?: string | Date) =>
    formatDate(value, {
      year: 'numeric'
    });

  const monthYearFormatter = (value?: string | Date) =>
    formatDate(value, {
      month: 'short',
      year: 'numeric'
    });

  return {
    numericFormatter,
    decimalFormatter,
    currencyFormatter,
    percentFormatter,
    dateFormatter,
    dayFormatter,
    monthFormatter,
    yearFormatter,
    monthLongFormatter,
    monthYearFormatter
  };
}

export default useFormatter;
