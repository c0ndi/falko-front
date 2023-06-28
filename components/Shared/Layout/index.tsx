import {useQuery} from "@tanstack/react-query";
import {getData} from "@/utils/getData";
import Loading from "@/components/Shared/Loading";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import {useLoading} from "@/hooks/useLoading";
import Navbar from "@/components/Shared/Navbar";
import {createContext, ReactNode} from "react";
import Footer from "@/components/Shared/Footer";
import Head from "next/head";

export const DataContext = createContext<{ data: any }>({data: {}});

export default function Layout({children}: { children: ReactNode }) {
    const {data, isLoading, isError} = useQuery({queryKey: ['shared'], queryFn: () => getData("/shared")})

    const loading = useLoading(isLoading);

    if (loading) {
        return <Loading/>
    }

    if (isError) {
        return <ErrorComponent/>
    }

    const {
        nav,
        facebookLink,
        instagramLink,
        youtubeLink,
        tiktokLink,
        phoneNumber,
        nipNumber,
        address,
        logoFooter,
    } = data.data.attributes;

    const footerContent = {
        facebookLink,
        instagramLink,
        address,
        phoneNumber,
        nipNumber,
        logoFooter,
        youtubeLink
    }
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Navbar content={{nav, facebookLink, youtubeLink, instagramLink, tiktokLink}}/>

            <DataContext.Provider value={{data: data.data.attributes}}>
                {children}
            </DataContext.Provider>

            <Footer content={footerContent}/>
        </>
    )
}