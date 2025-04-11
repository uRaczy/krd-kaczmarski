import debtRecords from '../../mocks/topDebts.mock.json';

import { DisplayManager } from './DisplayManager/DisplayManager';
import './DebtListingSection.styles.less';

export const DebtListingSection = () => {
  return (
    <section className='debtListingSection'>
      <div>Search</div>
      <div>Filters</div>
      <DisplayManager debts={debtRecords} />
    </section>
  );
};
