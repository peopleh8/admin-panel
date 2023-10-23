import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '@/layout/Layout'
import { setupStore } from '@/store'
import '@/styles/globals.scss'
import 'nprogress/nprogress.css'
import 'normalize.css'

const store = setupStore()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  NProgress.configure({ showSpinner: false })

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start())
    router.events.on('routeChangeError', () =>  NProgress.done())
    router.events.on('routeChangeComplete', () =>  NProgress.done())
  }, [])
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}