import { ParsedDebt } from '../types';

import { fetchFilteredDebts, fetchTopDebts } from './fetchers';
import { parseDebts } from './parsers';

export const getParsedTopDebts = async (): Promise<ParsedDebt[]> => {
  const rawDebts = await fetchTopDebts();
  return parseDebts(rawDebts);
};

export const getParsedFilteredDebts = async (phrase: string): Promise<ParsedDebt[]> => {
  const rawDebts = await fetchFilteredDebts(phrase);
  return parseDebts(rawDebts);
};
