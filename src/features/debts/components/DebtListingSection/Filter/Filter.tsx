import './Filter.styles.less';

export const Filter = () => {
  return (
    <div className='filter'>
      <label htmlFor='filter'>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</label>
      <div>
        <input type='text' className='filter__input' name='filter'></input>
        <button>SZUKAJ</button>
      </div>
    </div>
  );
};
