import { ParsedDebt } from '../types';

import { fetchSearchDebts, fetchTopDebts } from './fetchers';
import { parseDebts } from './parsers';

export const getParsedTopDebts = async (): Promise<ParsedDebt[]> => {
  const rawDebts = await fetchTopDebts();
  return parseDebts(rawDebts);
};

export const getParsedSearchDebts = async (
  phrase: string,
): Promise<ParsedDebt[]> => {
  const rawDebts = await fetchSearchDebts(phrase);
  return parseDebts(rawDebts);
};
