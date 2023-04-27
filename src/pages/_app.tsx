import React from 'react'; 
import { RecoilRoot } from 'recoil'; 

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/navigation/navigationMenu'

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot><Nav/><Component {...pageProps} /></RecoilRoot>
}
