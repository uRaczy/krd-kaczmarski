import { ParsedDebt } from '../types';

export const sortDebts = (
  data: ParsedDebt[],
  direction: 'asc' | 'desc',
  sortBy: keyof ParsedDebt,
) => {
  return data.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortBy === 'date' && aValue instanceof Date && bValue instanceof Date) {
      return direction === 'asc'
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });
};
