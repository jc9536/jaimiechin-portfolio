import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-P4NPYDG6ZT');
                            `}
                    </Script>
                    <Component {...pageProps} key={router.route} />
                    <SpeedInsights />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website