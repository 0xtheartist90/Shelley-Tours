import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Shelleys Tours NL - Betaalbare reizen voor iedereen',
    description:
        "Shelley's Tours organiseert betaalbare reizen voor jongeren en ouders met een beperkt budget. Van dagtrips tot meerdaagse reizen. Stuur een WhatsApp-bericht voor meer info!",
    keywords: [
        'betaalbare reizen',
        'reizen jongeren',
        'budget reizen',
        'groepsreizen',
        "Shelley's Tours",
        'dagtrips',
        'citytrips'
    ],
    openGraph: {
        title: "Shelley's Tours – Betaalbare reizen",
        description: 'Reizen voor jongeren en ouders met een beperkt budget. Iedereen verdient een mooie reis.',
        type: 'website'
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon.png', type: 'image/png', sizes: '512x512' }
        ],
        shortcut: '/favicon.ico',
        apple: '/apple-icon.png'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='nl'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                {children}
            </body>
        </html>
    );
};

export default Layout;
