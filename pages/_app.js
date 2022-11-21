import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

const Website = ({ Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-P4NPYDG6ZT"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag(&apos; js&apos;, new Date());

                        gtag(&apos;config&apos;, &apos;G-P4NPYDG6ZT&apos;);
                    </script>
                </Head>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                    <Analytics />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website