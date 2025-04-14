import { ParsedDebt } from '@/features/debts/types/debts/debts';
import { formatDate } from '@/features/debts/utils/utils';

import './Table.styles.less';

type Props = {
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  handleSort: (key: keyof ParsedDebt) => void;
  sortDirection: 'asc' | 'desc';
};

export const Table = ({ debts, sortKey, sortDirection, handleSort }: Props) => {
  const renderSortArrow = (key: keyof ParsedDebt) => {
    if (sortKey !== key) return null;
    return sortDirection === 'asc' ? ' 🔼' : ' 🔽';
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>DŁUŻNIK {renderSortArrow('name')}</th>
          <th onClick={() => handleSort('nip')}>NIP {renderSortArrow('nip')}</th>
          <th onClick={() => handleSort('value')}>KWOTA ZADŁUŻENIA {renderSortArrow('value')}</th>
          <th onClick={() => handleSort('date')}>
            DATA POWSTANIA ZOBOWIĄZANIA {renderSortArrow('date')}
          </th>
        </tr>
      </thead>
      <tbody>
        {debts.map(({ id, name, nip, value, date }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{nip}</td>
              <td>{value}</td>
              <td>{formatDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
