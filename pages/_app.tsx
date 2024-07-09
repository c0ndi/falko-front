import Layout from "@/components/Shared/Layout";
import * as gtag from '@/gtag';
import '@/styles/globals.scss';
import '@/styles/reset.scss';
import '@/styles/shared.scss';
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { NextSeo } from "next-seo";
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const layoutPaths = ["/", "/policies"];
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
            <NextSeo
                title="Home - Falko Project"
                description='let me be your guide through the story of redefined fashion and crumbled world'
                canonical="https://web.falkoproject.com/en"
                openGraph={{
                    url: 'https://strapi.falkoproject.com/uploads/431057761_1130037631464498_2642802240976394413_n_d5792f8824.jpg',
                    title: 'Home - Falko Project',
                    description: 'let me be your guide through the story of redefined fashion and crumbled world',
                    images: [{
                        url: 'https://strapi.falkoproject.com/uploads/431057761_1130037631464498_2642802240976394413_n_d5792f8824.jpg',
                        width: 850,
                        height: 650,
                        alt: 'Home - Falko Project',
                    }]
                }}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png",
                    },
                    {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png",
                    },
                    {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png",
                    },
                    {
                        rel: "manifest",
                        href: "/site.webmanifest",
                    },
                    {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5",
                    },
                ]}
            />
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
