'use client';

import OnlyPCSupport from 'components/OnlyPCSupport/OnlyPCSupport';
import { useMediaQuery } from 'hooks/useMediaQuery';

export default function Template({ children }: { children: React.ReactNode }) {
  const isNotPC = useMediaQuery('(max-width: 1024px)');

  return (
    <>
      {isNotPC && <OnlyPCSupport />}
      {children}
    </>
  );
}
