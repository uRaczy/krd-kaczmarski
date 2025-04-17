import { ParsedDebt } from '@debts/types';
import { formatDate, renderIcon } from '@debts/utils';

import { Loader } from '@debts/components/Loader/Loader';
import { NoResults } from '@debts/components/NoResults/NoResults';

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
  return showLoader ? (
    <Loader />
  ) : debts.length > 0 ? (
    <section className='table-section'>
      <div className='table__wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th className='table__header' onClick={() => handleSort('name')}>
                DŁUŻNIK
                {renderIcon('name', sortKey, sortDirection)}
              </th>
              <th className='table__header' onClick={() => handleSort('nip')}>
                NIP {renderIcon('nip', sortKey, sortDirection)}
              </th>
              <th className='table__header' onClick={() => handleSort('value')}>
                KWOTA ZADŁUŻENIA {renderIcon('value', sortKey, sortDirection)}
              </th>
              <th className='table__header' onClick={() => handleSort('date')}>
                DATA POWSTANIA ZOBOWIĄZANIA
                {renderIcon('date', sortKey, sortDirection)}
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
