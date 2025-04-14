import { ParsedDebt } from '@/features/debts/types/debts/debts';

import { Table } from './Table/Table';

import './DisplayManager.styles.less';

type Props = {
  debts: ParsedDebt[];
  sortKey: keyof ParsedDebt;
  handleSort: (key: keyof ParsedDebt) => void;
  sortDirection: 'asc' | 'desc';
};

export const DisplayManager = ({ debts, sortKey, sortDirection, handleSort }: Props) => {
  return (
    <>
      <Table
        debts={debts}
        sortKey={sortKey}
        sortDirection={sortDirection}
        handleSort={handleSort}
      />
    </>
  );
};
