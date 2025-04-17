import { useEffect, useMemo, useRef, useState } from 'react';

import { ParsedDebt } from '@debts/types';
import { ChangeEvent } from '@debts/types';

import { useDelayedLoader } from '@debts/utils/hooks/useDelayedLoader';
import { useIsMobile } from '@debts/utils/hooks/useIsMobile';
import { sortDebts } from '@debts/utils/utils';
import {
  getParsedSearchDebts,
  getParsedTopDebts,
} from '@debts/api/getParsedDebts';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { DisplayManager } from './DisplayManager/DisplayManager';
import { Search } from './Search/Search';

import './DebtListingSection.styles.less';

export const DebtListingSection = () => {
  const [debts, setDebts] = useState<ParsedDebt[]>([]);
  const [sortKey, setSortKey] = useState<keyof ParsedDebt>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchValue, setSearchValue] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMobile = useIsMobile();
  const loader = useDelayedLoader();
  const loaderRef = useRef(loader);

  const sortedDebts = useMemo(() => {
    return debts ? sortDebts(debts, sortDirection, sortKey) : [];
  }, [debts, sortKey, sortDirection]);

  useEffect(() => {
    const setup = async () => {
      loaderRef.current.start();
      setHasLoaded(false);
      const topDebts = await getParsedTopDebts();
      setDebts(topDebts);
      setHasLoaded(true);
      loaderRef.current.stop();
    };

    setup();
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSort = (key: keyof ParsedDebt) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const handleInputChange = (e: ChangeEvent) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
  };

  const handleSearch = async (searchValue: string) => {
    const trimmedValue = searchValue.trim();
    if (trimmedValue.length < 3 && trimmedValue.length > 0) {
      setError('Wpisz co najmniej 3 znaki, aby wyszukać');
      loaderRef.current.stop();
      return;
    }

    const forbiddenCharsRegex = /[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]/g;
    if (forbiddenCharsRegex.test(trimmedValue)) {
      setError('Dozwolone są tylko litery, cyfry i spacje');
      loaderRef.current.stop();
      return;
    }

    if (trimmedValue.length === 0) {
      setError(null);
      const topDebts = await getParsedTopDebts();
      setDebts(topDebts);
      setHasLoaded(true);
      return;
    }

    try {
      loaderRef.current.start();
      setHasLoaded(false);
      setError(null);
      const foundDebts = await getParsedSearchDebts(trimmedValue);
      setDebts(foundDebts);
      setHasLoaded(true);
    } catch {
      setError(
        'Wystąpił błąd podczas pobierania danych lub zapytanie jest niepoprawne.',
      );
    } finally {
      loaderRef.current.stop();
    }
  };

  return (
    <section className='debtListingSection'>
      <Search
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <ErrorMessage error={error} />
      <DisplayManager
        debts={sortedDebts}
        sortKey={sortKey}
        sortDirection={sortDirection}
        isMobile={isMobile}
        showLoader={loader.show}
        hasLoaded={hasLoaded}
        handleSort={handleSort}
      />
    </section>
  );
};
