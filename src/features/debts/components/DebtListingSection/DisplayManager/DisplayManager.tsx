import { ParsedDebt } from '@/features/debts/types/debts/debts';

import { Table } from './Table/Table';

import './DisplayManager.styles.less';

type Props = {
  debts: ParsedDebt[];
};

export const DisplayManager = ({ debts }: Props) => {
  return (
    <>
      <Table debts={debts} />
    </>
  );
};
