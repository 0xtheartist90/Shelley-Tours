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
    title: "Shelley's Tours – Betaalbare reizen voor jongeren en ouders",
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
        icon: '/images/logo shelleys.png'
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
