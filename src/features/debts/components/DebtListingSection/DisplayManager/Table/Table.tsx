import { ParsedDebt } from '@/features/debts/types/debts';

import { Loader } from '@debts/components/Loader/Loader';
import { NoResults } from '@debts/components/NoResults/NoResults';

import { formatDate } from '@debts/utils/utils';

import './Table.styles.less';

type Props = {
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  sortDirection: 'asc' | 'desc';
  showLoader: boolean;
  hasLoaded: boolean;
  handleSort: (key: keyof ParsedDebt) => void;
};

export const Table = ({
  debts,
  sortKey,
  sortDirection,
  showLoader,
  hasLoaded,
  handleSort,
}: Props) => {
  const renderSortArrow = (key: keyof ParsedDebt) => {
    if (sortKey !== key) return null;
    return sortDirection === 'asc' ? ' 🔼' : ' 🔽';
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            DŁUŻNIK {renderSortArrow('name')}
          </th>
          <th onClick={() => handleSort('nip')}>
            NIP {renderSortArrow('nip')}
          </th>
          <th onClick={() => handleSort('value')}>
            KWOTA ZADŁUŻENIA {renderSortArrow('value')}
          </th>
          <th onClick={() => handleSort('date')}>
            DATA POWSTANIA ZOBOWIĄZANIA {renderSortArrow('date')}
          </th>
        </tr>
      </thead>
      {showLoader ? (
        <Loader />
      ) : debts.length > 0 ? (
        <tbody>
          {debts.map(({ id, name, nip, value, date }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{nip}</td>
                <td>{value.toFixed(2)}</td>
                <td>{formatDate(date)}</td>
              </tr>
            );
          })}
        </tbody>
      ) : hasLoaded ? (
        <NoResults />
      ) : null}
    </table>
  );
};
