import { ParsedDebt } from '@/features/debts/types/debts/debts';

import './Table.styles.less';

type Props = {
  debts: ParsedDebt[];
};

export const Table = ({ debts }: Props) => {
  console.log(debts);
  return (
    <table>
      <thead>
        <tr>
          <th>DŁUŻNIK</th>
          <th>NIP</th>
          <th>KWOTA ZADŁUŻENIA</th>
          <th>DATA POWSTANIA ZOBOWIĄZANIA</th>
        </tr>
      </thead>
      <tbody>
        {debts.map((debt) => {
          return (
            <tr key={debt.id}>
              <td>{debt.name}</td>
              <td>{debt.nip}</td>
              <td>{debt.value}</td>
              <td>{debt.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
