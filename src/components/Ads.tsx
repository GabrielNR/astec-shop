// components/Ads.tsx

import React, { useEffect } from 'react';

interface AdsProps {
  scriptSrc: string;
}

export const Ads: React.FC<AdsProps> = ({ scriptSrc }) => {
  useEffect(() => {
    // 1. Evita injeção no ambiente de servidor (apenas browser)
    if (typeof document === 'undefined') {
      return;
    }

    // 2. Cria o elemento script
    const script = document.createElement('script');

    // 3. Define os atributos do script do PropellerAds
    script.src = scriptSrc;
    script.async = true;
    script.setAttribute('data-cfasync', 'false'); // Importante para PropellerAds

    // 4. Injeta o script no final do <body>
    document.body.appendChild(script);

    // 5. Função de limpeza (boa prática para React)
    return () => {
      document.body.removeChild(script);
    };
  }, [scriptSrc]); // Roda sempre que a URL do script mudar

  return null; // O componente não renderiza nada visível
};