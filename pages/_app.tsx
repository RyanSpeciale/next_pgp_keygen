import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CssBaseline>
        <Layout>
          <Component { ...pageProps }/>
        </Layout>
      </CssBaseline>
    </div>
  )
}

export default MyApp
