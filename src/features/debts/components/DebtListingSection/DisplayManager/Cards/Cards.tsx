import { ParsedDebt } from '@/features/debts/types/debts';

import { Loader } from '@debts/components/Loader/Loader';
import { NoResults } from '@debts/components/NoResults/NoResults';

import { formatDate } from '@debts/utils/utils';

import './Cards.styles.less';

type Props = {
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  sortDirection: 'asc' | 'desc';
  showLoader: boolean;
  hasLoaded: boolean;
  handleSort: (key: keyof ParsedDebt) => void;
};

export const Cards = ({
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

  return showLoader ? (
    <Loader />
  ) : debts.length > 0 ? (
    <section className='cards__section'>
      <div className='cards__sort'>
        <button
          className={`cards__sort-button ${sortKey === 'name' ? 'active' : ''}`}
          onClick={() => handleSort('name')}
        >
          Dłużnik {renderSortArrow('name')}
        </button>
        <button
          className={`cards__sort-button ${sortKey === 'nip' ? 'active' : ''}`}
          onClick={() => handleSort('nip')}
        >
          NIP {renderSortArrow('nip')}
        </button>
        <button
          className={`cards__sort-button ${sortKey === 'value' ? 'active' : ''}`}
          onClick={() => handleSort('value')}
        >
          Kwota zadłużenia {renderSortArrow('value')}
        </button>
        <button
          className={`cards__sort-button ${sortKey === 'date' ? 'active' : ''}`}
          onClick={() => handleSort('date')}
        >
          Data {renderSortArrow('date')}
        </button>
      </div>
      <div className='cards'>
        {debts.map(({ id, name, nip, value, date }) => (
          <div className='card' key={id}>
            <span className='card__title'>{name}</span>
            <div className='card__data'>
              <span className='card__row'>
                <span className='card__label'>NIP:</span> {nip}
              </span>
              <span className='card__row'>
                <span className='card__label'>Kwota:</span>
                {value.toFixed(2)} zł
              </span>
              <span className='card__row'>
                <span className='card__label'>Data:</span>
                {formatDate(date)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  ) : hasLoaded ? (
    <NoResults />
  ) : null;
};
