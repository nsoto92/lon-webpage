import '@mantine/core/styles.css';
import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';

import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify/configureAmplify';

export const metadata: Metadata = {
  title: "Los Verdaderos Ya Tu Sabe",
  description: "Los Verdaderos Ya Tu Sabe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <MantineProvider>
          <ConfigureAmplifyClientSide />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
