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
  console.log(searchValue);
  return (
    <div className='search'>
      <label htmlFor='search'>Podaj NIP lub nazwę dłużnika</label>
      <div>
        <input
          type='text'
          value={searchValue}
          onChange={handleInputChange}
          className='search__input'
          name='search'
        ></input>
        <button onClick={() => handleSearch(searchValue)}>SZUKAJ</button>
      </div>
    </div>
  );
};
