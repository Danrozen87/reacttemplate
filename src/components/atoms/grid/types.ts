
export interface ResponsiveGridColumns {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  '2xl'?: number;
}

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: ResponsiveGridColumns;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const defaultColumns: ResponsiveGridColumns = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 4,
  '2xl': 4
};

export const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6'
};
