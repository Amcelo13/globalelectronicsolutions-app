'use client';

import { AppProgressBar as ProgressBar  } from 'next-nprogress-bar';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
        {children}
      <ProgressBar 
        height="4px"
        color="#16bed4"
        options={{ showSpinner: false }}
        shallowRouting
        />
    </>
  );
};

export default Providers;