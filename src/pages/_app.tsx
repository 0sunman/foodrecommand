import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/store'

export default wrapper.withRedux(
  function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }  
)
