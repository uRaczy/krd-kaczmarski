import { ParsedDebt } from '@debts/types';

import { Cards } from './Cards/Cards';
import { Table } from './Table/Table';

import './DisplayManager.styles.less';

type Props = {
  isMobile: boolean;
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  sortDirection: 'asc' | 'desc';
  showLoader: boolean;
  hasLoaded: boolean;
  handleSort: (key: keyof ParsedDebt) => void;
};

export const DisplayManager = ({
  isMobile,
  debts,
  sortKey,
  sortDirection,
  showLoader,
  hasLoaded,
  handleSort,
}: Props) => {
  return isMobile ? (
    <Cards
      debts={debts}
      sortKey={sortKey}
      sortDirection={sortDirection}
      showLoader={showLoader}
      hasLoaded={hasLoaded}
      handleSort={handleSort}
    />
  ) : (
    <Table
      debts={debts}
      sortKey={sortKey}
      sortDirection={sortDirection}
      showLoader={showLoader}
      hasLoaded={hasLoaded}
      handleSort={handleSort}
    />
  );
};
