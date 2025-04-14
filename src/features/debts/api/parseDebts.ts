import { ParsedDebt, ResponseDebt } from '../types';

export const parseSingleDebt = ({
  Id,
  Name,
  NIP,
  Value,
  Date: stringDate,
}: ResponseDebt): ParsedDebt => {
  return {
    id: Id,
    name: Name,
    nip: NIP,
    value: Value,
    date: new Date(stringDate),
  };
};

export const parseDebts = (rawDebts: ResponseDebt[]): ParsedDebt[] => {
  return rawDebts.map((singleDebt) => parseSingleDebt(singleDebt));
};
