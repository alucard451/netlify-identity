import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IdentityContextProvider } from 'react-netlify-identity'
export default function App({ Component, pageProps }: AppProps) {
  const url = "https://playful-mousse-b92e06.netlify.app/.netlify/identity";
  return (
  <IdentityContextProvider url={url}>

  <Component {...pageProps} />
  </IdentityContextProvider>)
}
