import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {useRouter} from "next/router";
import Layout from "@/components/Shared/Layout";

const queryClient = new QueryClient()

export default function App({Component, pageProps}: AppProps) {
   const router = useRouter();
   const layoutPaths = ["/", "/storyboards/[slug]"];
   const isLayout = layoutPaths.includes(router.pathname);
   return (
      <QueryClientProvider client={queryClient}>
         {isLayout ? (
            <Layout>
               <Component {...pageProps} />
            </Layout>
         ) : (
            <Component {...pageProps} />
         )}
      </QueryClientProvider>
   )
}
