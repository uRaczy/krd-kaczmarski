import './DisplayManager.styles.less';
import { ResponseDebt } from '@/features/debts/types/debts/debts';

type Props = {
  debts: ResponseDebt[];
};

export const DisplayManager = ({ debts }: Props) => {
  console.log(debts);
  return (
    <>
      <h1>DisplayManager</h1>
    </>
  );
};
