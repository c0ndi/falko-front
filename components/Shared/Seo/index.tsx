import { StrapiFile } from "@/types/types";
import { NextSeo } from "next-seo";
import { PropsWithChildren } from "react";

type Seo = {
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
  metaSocialFacebook: {
    title: string;
    description: string;
    image: StrapiFile;
    url: string;
  };
  metaSocialTwitter: {
    title: string;
    description: string;
    image: StrapiFile;
    url: string;
  };
  keywords?: string;
  metaRobots?: string;
  structuredData?: string;
  metaViewport?: string;
  canonicalURL?: string;
}

export default function Seo({ seo }: PropsWithChildren<{ seo: Seo }>) {
  const seoData = seo;
  const seoStructuredData = seo?.structuredData;

  if (!seoData) {
    return (
      <NextSeo
        title="Home - Falko Project"
        description='let me be your guide through the story of redefined fashion and crumbled world'
        canonical="https://web.falkoproject.com/en"
        openGraph={{
          url: 'https://strapi.falkoproject.com/uploads/431057761_1130037631464498_2642802240976394413_n_d5792f8824.jpg',
          title: 'Home - Falko Project',
          description: 'let me be your guide through the story of redefined fashion and crumbled world',
          images: [{ url: 'https://strapi.falkoproject.com/uploads/431057761_1130037631464498_2642802240976394413_n_d5792f8824.jpg' }]
        }}
      />
    )
  }

  return (
    <NextSeo
      title={seoData.metaTitle ?? 'Home - Falko Project'}
      description={seoData.metaDescription ?? 'let me be your guide through the story of redefined fashion and crumbled world'}
      canonical={seoData.canonicalURL ?? 'https://web.falkoproject.com/en'}
      openGraph={{
        url: seoData.metaImage ?? 'https://strapi.falkoproject.com/uploads/431057761_1130037631464498_2642802240976394413_n_d5792f8824.jpg',
        title: seoData.metaTitle,
        description: seoData.metaDescription,
        images: [{ url: seoData.metaImage ?? 'https://strapi.falkoproject.com/uploads/431057761_1130037631464498_2642802240976394413_n_d5792f8824.jpg' }]
      }}
    />
  )
}