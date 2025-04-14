import { formatDate } from '@/features/debts/utils/utils';

import { ParsedDebt, ResponseDebt } from '../types';

export const parseSingleDebt = ({ Id, Name, NIP, Value, Date }: ResponseDebt): ParsedDebt => {
  return {
    id: Id,
    name: Name,
    nip: NIP,
    value: Value,
    date: formatDate(Date),
  };
};

export const parseDebts = (rawDebts: ResponseDebt[]): ParsedDebt[] => {
  return rawDebts.map((singleDebt) => parseSingleDebt(singleDebt));
};
