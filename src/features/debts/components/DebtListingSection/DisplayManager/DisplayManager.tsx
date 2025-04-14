import { ParsedDebt } from '@/features/debts/types/debts/debts';

import { Cards } from './Cards/Cards';
import { Table } from './Table/Table';

import './DisplayManager.styles.less';

type Props = {
  isMobile: boolean;
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  sortDirection: 'asc' | 'desc';
  handleSort: (key: keyof ParsedDebt) => void;
};

export const DisplayManager = ({ isMobile, debts, sortKey, sortDirection, handleSort }: Props) => {
  return (
    <>
      {isMobile ? (
        <Cards
          debts={debts}
          sortKey={sortKey}
          sortDirection={sortDirection}
          handleSort={handleSort}
        />
      ) : (
        <Table
          debts={debts}
          sortKey={sortKey}
          sortDirection={sortDirection}
          handleSort={handleSort}
        />
      )}
    </>
  );
};
