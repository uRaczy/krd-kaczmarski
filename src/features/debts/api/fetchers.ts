import { ResponseDebt } from '../types';

import { ENDPOINTS } from './endpoints';

const fetchJson = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Network or parsing error: ${(error as Error).message}`);
  } finally {
    clearTimeout(timeoutId);
  }
};

export const fetchTopDebts = async () => {
  return fetchJson<ResponseDebt[]>(ENDPOINTS.TOP_DEBTS);
};

export const fetchSearchDebts = async (searchValue: string) => {
  return fetchJson<ResponseDebt[]>(ENDPOINTS.FILTERED_DEBTS, {
    method: 'POST',
    body: JSON.stringify({ phrase: searchValue }),
  });
};
