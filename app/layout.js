import { Inter } from 'next/font/google';
import ClientLayout from '@/components/LayoutClient';
import config from '@/config';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const viewport = {
    themeColor: config.colors.main,
    width: 'device-width',
    initialScale: 1
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-theme={config.colors.theme}
            className={font.className}
        >
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
