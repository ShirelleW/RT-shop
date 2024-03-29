import StoreProvider from '../app/StoreProvider.jsx'
import store from '../lib/store'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  )
}
