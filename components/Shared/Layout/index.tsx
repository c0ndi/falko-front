import ErrorComponent from "@/components/Shared/ErrorComponent";
import Footer from "@/components/Shared/Footer";
import Loading from "@/components/Shared/Loading";
import Navbar from "@/components/Shared/Navbar";
import { useLoading } from "@/hooks/useLoading";
import { getData } from "@/utils/getData";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { createContext, ReactNode } from "react";

export const DataContext = createContext<{ data: any }>({ data: {} });

export default function Layout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { data, isLoading, isError } = useQuery({ queryKey: ['shared'], queryFn: () => getData("/shared", router.locale) })

    const loading = useLoading(isLoading);

    if (loading) {
        return <Loading />
    }

    if (isError) {
        return <ErrorComponent />
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
            <Navbar content={{ nav, facebookLink, youtubeLink, instagramLink, tiktokLink }} />

            <DataContext.Provider value={{ data: data.data.attributes }}>
                {children}
            </DataContext.Provider>

            <Footer content={footerContent} />
        </>
    )
}