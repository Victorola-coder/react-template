const formatter = Intl.NumberFormat("en-US");

export const formatNumber = (value: number): string => formatter.format(value);
