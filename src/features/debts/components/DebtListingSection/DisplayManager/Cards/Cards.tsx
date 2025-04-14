import { ParsedDebt } from '@/features/debts/types/debts/debts';
import { formatDate } from '@/features/debts/utils/utils';

import './Cards.styles.less';

type Props = {
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  sortDirection: 'asc' | 'desc';
  handleSort: (key: keyof ParsedDebt) => void;
};

export const Cards = ({ debts, sortKey, sortDirection, handleSort }: Props) => {
  const renderSortArrow = (key: keyof ParsedDebt) => {
    if (sortKey !== key) return null;
    return sortDirection === 'asc' ? ' 🔼' : ' 🔽';
  };

  return (
    <>
      <div className='cards__sort'>
        <label>Sortuj po:</label>

        <button className='cards__sort-button' onClick={() => handleSort('name')}>
          DŁUŻNIK {renderSortArrow('name')}
        </button>
        <button className='cards__sort-button' onClick={() => handleSort('nip')}>
          NIP {renderSortArrow('nip')}
        </button>
        <button className='cards__sort-button' onClick={() => handleSort('value')}>
          KWOTA ZADŁUŻENIA {renderSortArrow('value')}
        </button>
        <button className='cards__sort-button' onClick={() => handleSort('date')}>
          DATA {renderSortArrow('date')}
        </button>
      </div>
      <div className='cards'>
        {debts.map(({ id, name, nip, value, date }) => (
          <div className='card' key={id}>
            <div className='card__title'>{name}</div>
            <div className='card__row'>
              <strong>NIP:</strong> {nip}
            </div>
            <div className='card__row'>
              <strong>Kwota:</strong> {value.toFixed(2)} zł
            </div>
            <div className='card__row'>
              <strong>Data:</strong> {formatDate(date)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
