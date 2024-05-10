'use client';

import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import config from '@/config';

const ClientLayout = ({ children }) => {
    return (
        <>
            <SessionProvider>
                {/* Show a progress bar at the top when navigating between pages */}
                <NextTopLoader color={config.colors.main} showSpinner={false} />

                {/* Content inside app/page.js files  */}
                {children}
            </SessionProvider>
        </>
    );
};

export default ClientLayout;
