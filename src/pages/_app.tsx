import { AppProps } from 'next/app'
import { AppProvider } from '../contexts/App.context'
// import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
