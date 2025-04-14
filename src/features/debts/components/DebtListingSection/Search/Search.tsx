import './Search.styles.less';

export const Search = () => {
  return (
    <div className='search'>
      <label htmlFor='search'>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</label>
      <div>
        <input type='text' className='search__input' name='search'></input>
        <button>SZUKAJ</button>
      </div>
    </div>
  );
};
