export const BASIC_COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
] as const;

export type BasicColor = (typeof BASIC_COLORS)[number];
