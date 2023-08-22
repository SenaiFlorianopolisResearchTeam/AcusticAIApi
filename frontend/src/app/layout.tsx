import "../scss/index.scss"
import { QueryClientProvider, QueryClient  } from "react-query"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  icons: '/logo.ico',
  title: 'AcustticAI - home',
  description: '...',
}

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
