import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppShell } from '@/components/AppShell';
import { CssRegistry } from '@/app/CssRegistry';
import { ThemeProvider } from '@ui5/webcomponents-react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
          data-ui5-config
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              theme: 'sap_horizon'
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <CssRegistry>
          <ThemeProvider>
            <AppShell />
            <div className='appSrollContainer'>{children}</div>
          </ThemeProvider>
        </CssRegistry>
      </body>
    </html>
  )
}
