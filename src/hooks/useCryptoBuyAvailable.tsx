import { useState, useEffect } from 'react';

export interface CryptoBuyAvailableResult {
  isAvailable: boolean;
}

export const useCryptoBuyAvailable = (
  cryptoCode: string,
  networkMarketName: string
): CryptoBuyAvailableResult => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    (async function () {
      const transakApiUrl = process.env.NEXT_PUBLIC_TRANSAK_API_URL;

      try {
        const response = await fetch(
          `${transakApiUrl}/cryptocoverage/api/v1/public/partner/crypto-currencies?symbol=${cryptoCode}&network=${networkMarketName}`
        );

        if (response.ok) {
          setIsAvailable(true);
        }
      } catch (e) {}
    })();
  }, [cryptoCode, networkMarketName]);

  return {
    isAvailable,
  };
};
