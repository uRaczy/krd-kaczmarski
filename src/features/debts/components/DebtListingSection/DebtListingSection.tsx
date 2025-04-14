import { useMemo, useState } from 'react';

import { parseDebts } from '../../api/parseDebts';
import MOCKdebtRecords from '../../mocks/topDebts.mock.json';
import { ParsedDebt } from '../../types';
import { sortDebts } from '../../utils/utils';

import { DisplayManager } from './DisplayManager/DisplayManager';
import { Filter } from './Filter/Filter';

import './DebtListingSection.styles.less';

export const DebtListingSection = () => {
  const [debts] = useState<ParsedDebt[]>(parseDebts(MOCKdebtRecords));
  const [sortKey, setSortKey] = useState<keyof ParsedDebt>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof ParsedDebt) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedDebts = useMemo(() => {
    return sortDebts(debts, sortDirection, sortKey);
  }, [debts, sortKey, sortDirection]);

  //* After fetch take care that table is sorted ascending by name
  // todo: Check if this is the best approach

  return (
    <section className='debtListingSection'>
      <Filter />
      <DisplayManager
        debts={sortedDebts}
        sortKey={sortKey}
        sortDirection={sortDirection}
        handleSort={handleSort}
      />
    </section>
  );
};
