import { ParsedDebt } from '@debts/types';
import { formatDate } from '@debts/utils';
import { renderIcon } from '@debts/utils';

import { Loader } from '@debts/components/Loader/Loader';
import { NoResults } from '@debts/components/NoResults/NoResults';

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
  return showLoader ? (
    <Loader />
  ) : debts.length > 0 ? (
    <section className='cards-section'>
      <div className='cards__sort'>
        <button
          className={`cards__sort-button ${sortKey === 'name' ? 'active' : ''}`}
          onClick={() => handleSort('name')}
        >
          Dłużnik {renderIcon('name', sortKey, sortDirection)}
        </button>
        <button
          className={`cards__sort-button ${sortKey === 'nip' ? 'active' : ''}`}
          onClick={() => handleSort('nip')}
        >
          NIP {renderIcon('nip', sortKey, sortDirection)}
        </button>
        <button
          className={`cards__sort-button ${sortKey === 'value' ? 'active' : ''}`}
          onClick={() => handleSort('value')}
        >
          Kwota zadłużenia {renderIcon('value', sortKey, sortDirection)}
        </button>
        <button
          className={`cards__sort-button ${sortKey === 'date' ? 'active' : ''}`}
          onClick={() => handleSort('date')}
        >
          Data {renderIcon('date', sortKey, sortDirection)}
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
