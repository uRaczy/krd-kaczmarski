import { IconTriangle } from '../components/icons';
import { ParsedDebt } from '../types';

export const renderIcon = (
  key: keyof ParsedDebt,
  sortKey: keyof ParsedDebt,
  sortDirection: 'asc' | 'desc',
) => {
  const isActive = sortKey === key;
  const directionClass = isActive ? `sort-icon--${sortDirection}` : '';

  return (
    <IconTriangle
      className={`sort-icon ${isActive ? 'sort-icon--active' : ''} ${directionClass}`}
    />
  );
};
