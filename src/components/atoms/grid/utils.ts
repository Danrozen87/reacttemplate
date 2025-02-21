
import { ResponsiveGridColumns } from './types';

export const getColumnsClass = (columns: ResponsiveGridColumns): string => {
  const classes = [];
  if (columns.xs) classes.push(`grid-cols-${columns.xs}`);
  if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
  if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
  if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
  if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
  if (columns['2xl']) classes.push(`2xl:grid-cols-${columns['2xl']}`);
  return classes.join(' ');
};
