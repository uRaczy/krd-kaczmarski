import { ChangeEvent } from '@debts/types';

import './Search.styles.less';

type Props = {
  searchValue: string;
  handleInputChange: (e: ChangeEvent) => void;
  handleSearch: (searchValue: string) => void;
};

export const Search = ({
  searchValue,
  handleInputChange,
  handleSearch,
}: Props) => {
  return (
    <section className='search__section'>
      <div className='search__wrapper'>
        <div className='search'>
          <label className='search__label' htmlFor='search'>
            Podaj NIP lub nazwę dłużnika
          </label>
          <div className='search__controls'>
            <input
              type='text'
              value={searchValue}
              onChange={handleInputChange}
              className='search__input'
              name='search'
            ></input>
            <button
              className='search__button'
              onClick={() => handleSearch(searchValue)}
            >
              SZUKAJ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
