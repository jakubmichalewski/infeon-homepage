import { useCallback } from 'react';

const useStringHelpers = () => {
  const getAnchor = useCallback((value: string, hash: boolean = true) => {
    return `${hash ? '#' : ''}${value.replaceAll(' ', '-').toLowerCase()}`;
  }, []);

  const getCurrencySymbol = useCallback((currency: string) => {
    const currencies: Record<string, string> = {
      GBP: '£'
    };

    return currencies[currency];
  }, []);

  return { getAnchor, getCurrencySymbol };
};

export default useStringHelpers;
