import '@/styles/globals.scss'
import '@/styles/reset.scss'
import '@/styles/shared.scss'
import type {AppProps} from 'next/app'
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {useRouter} from "next/router";
import Layout from "@/components/Shared/Layout";
import {useEffect} from "react";
import Script from "next/script"
import * as gtag from '@/gtag'

const queryClient = new QueryClient()

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const layoutPaths = ["/", "/storyboardy", "/policies"];
    const isLayout = layoutPaths.includes(router.pathname);

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url)
        }
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <QueryClientProvider client={queryClient}>
                {isLayout ? (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                ) : (
                    <Component {...pageProps} />
                )}
            </QueryClientProvider>
        </>
    )
}
