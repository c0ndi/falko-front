import About from "@/components/Home/About";
import Collection from "@/components/Home/Collection";
import Hero from "@/components/Home/Hero";
import OurManga from "@/components/Home/OurManga";
import OurStoryboards from "@/components/Home/OurStoryboards";
import { getData } from "@/utils/getData";
import { NextSeo } from "next-seo";

export default function Home({ data }: any) {
   const {
      hero,
      collection,
      ourManga,
      ourStoryboards,
      about,
      seo
   } = data.data.attributes;

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
         <Hero content={hero} />
         <Collection content={collection} />
         <OurManga
            content={ourManga}
         />
         <div className={"pageWrapper"} meta-data={"t"}>
            <OurStoryboards content={ourStoryboards} />
         </div>
         <About content={about} />
      </>
   )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
   const data = await getData("/home", locale)

   return {
      props: {
         data
      },
      revalidate: 10
   }
}