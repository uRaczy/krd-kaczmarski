import { useState } from 'react';

import { parseDebts } from '../../api/parseDebts';
import MOCKdebtRecords from '../../mocks/topDebts.mock.json';
import { ParsedDebt } from '../../types';

import { DisplayManager } from './DisplayManager/DisplayManager';
import { Filter } from './Filter/Filter';

import './DebtListingSection.styles.less';

export const DebtListingSection = () => {
  const [debts] = useState<ParsedDebt[]>(parseDebts(MOCKdebtRecords));

  return (
    <section className='debtListingSection'>
      <Filter />
      <DisplayManager debts={debts} />
    </section>
  );
};
