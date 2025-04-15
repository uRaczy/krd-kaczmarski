import { useEffect, useMemo, useState } from 'react';

import { ParsedDebt } from '@debts/types';
import { useIsMobile } from '@debts/utils/hooks';
import { sortDebts } from '@debts/utils/utils';

import { getParsedTopDebts } from '../../api/getParsedDebts';

import { DisplayManager } from './DisplayManager/DisplayManager';
import { Search } from './Search/Search';

import './DebtListingSection.styles.less';

export const DebtListingSection = () => {
  const [debts, setDebts] = useState<ParsedDebt[] | null>(null);
  const [sortKey, setSortKey] = useState<keyof ParsedDebt>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const isMobile = useIsMobile();

  const handleSort = (key: keyof ParsedDebt) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    const setupDebts = async () => {
      const loadedDebts = await getParsedTopDebts();
      setTimeout(async () => {
        setDebts(loadedDebts);
      }, 2000);
    };

    setupDebts();
  }, []);

  const sortedDebts = useMemo(() => {
    return debts ? sortDebts(debts, sortDirection, sortKey) : [];
  }, [debts, sortKey, sortDirection]);

  return (
    <section className='debtListingSection'>
      <Search />
      <DisplayManager
        debts={sortedDebts}
        sortKey={sortKey}
        sortDirection={sortDirection}
        isMobile={isMobile}
        handleSort={handleSort}
      />
    </section>
  );
};
