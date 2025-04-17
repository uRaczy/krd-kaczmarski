import { ParsedDebt } from '@/features/debts/types/debts';

import { IconTriangle } from '@debts/components/icons';
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
  const renderIcon = (key: keyof ParsedDebt) => {
    const isActive = sortKey === key;
    const directionClass = isActive ? `table__icon--${sortDirection}` : '';

    return (
      <IconTriangle
        className={`table__icon ${isActive ? 'table__icon--active' : ''} ${directionClass}`}
      />
    );
  };

  return showLoader ? (
    <Loader />
  ) : debts.length > 0 ? (
    <section className='table__section'>
      <div className='table__wrapper'>
        <table className='table'>
          <thead className='table__head'>
            <tr className='table__row table__row-header'>
              <th className='table__header' onClick={() => handleSort('name')}>
                DŁUŻNIK
                {renderIcon('name')}
              </th>
              <th className='table__header' onClick={() => handleSort('nip')}>
                NIP {renderIcon('nip')}
              </th>
              <th className='table__header' onClick={() => handleSort('value')}>
                KWOTA ZADŁUŻENIA {renderIcon('value')}
              </th>
              <th className='table__header' onClick={() => handleSort('date')}>
                DATA POWSTANIA ZOBOWIĄZANIA
                {renderIcon('date')}
              </th>
            </tr>
          </thead>

          <tbody className='table__body'>
            {debts.map(({ id, name, nip, value, date }) => (
              <tr className='table__row' key={id}>
                <td className='table__cell'>{name}</td>
                <td className='table__cell'>{nip}</td>
                <td className='table__cell'>{value.toFixed(2)}</td>
                <td className='table__cell'>{formatDate(date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  ) : hasLoaded ? (
    <NoResults />
  ) : null;
};
