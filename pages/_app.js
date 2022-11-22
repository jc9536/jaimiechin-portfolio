import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { Script } from 'next/script'

const Website = ({ Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-P4NPYDG6ZT', 'auto');
          ga('send', 'pageview');
        `}
                </Script>
                <Script
                    src="https://www.google-analytics.com/analytics.js"
                    strategy="afterInteractive"
                />
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                    <Analytics />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website