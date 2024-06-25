import PoliciesDesktop from '@/public/images/policies-desktop.jpg';
import PoliciesMobile from '@/public/images/policies-mobile.jpg';
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';

function Polish() {
   return (
      <article>
         <h2>POLITYKA WYSYŁKI</h2>

         <p>
            Czas realizacji wysyłki produktów dostępnych w magazynie wynosi około 5 dni roboczych. Ze względu na nasz mały zespół, czas ten może się wydłużyć w okresach większego obciążenia pracą.
         </p>

         <br />
         <br />

         Wysyłka produktów zamówionych w przedsprzedaży trwa dłużej. Dokładny czas wysyłki zależy od konkretnego produktu i jest podany na stronie zakupu. Zwykle wynosi do 3 tygodni.

         <h2>POLITYKA ZWROTÓW</h2>
         <p>
            Akceptujemy zwroty gotówki jak i wymiany w zależności od dostępności rozmiarów danego przedmiotu. Po informację odnośnie wymian prosimy o kontakt na maila info@falkoproject.com.
            <br />
            <br />
            Nasza siedziba znajduje się w Polsce.
            Zwroty krajowe przyjmujemy w ciągu 14 dni od dnia dostawy.            <br />
            <br />
            <br />
            Akceptujemy zwroty tylko tych produktów, które mają wszystkie metki i nie noszą śladów użytkowania.            <br />
            <br />
            Przed odesłaniem towaru, prosimy o wypełnienie formularza dołączonego do zamówienia.             <br />
            Aby uzyskać instrukcje dotyczące zwrotów, prosimy o kontakt mailowy: info@falkoproject.com
            <br />
            <br />
            Instrukcja dokonania zwrotu znajduje się w formularzu.
            Aby uzyskać etykietę zwrotną szczegółowe instrukcje dotyczące zwrotów, prosimy o kontakt mailowy: info@falkoproject.com.
            <br />
            <br />
            Zwroty gotówki realizujemy w ciągu 2 tygodni od otrzymania przez nas zwracanego towaru.
         </p>
      </article>
   )
}

function English() {
   return (
      <article>
         <h2>Shipping policy</h2>
         <p>
            Shipping of in-stock products takes 5 working days. Unfortunately, due to our two-person team, shipping may take a little longer when the workload is heavier.

            <br />
            <br />

            Shipping of pre-ordered products takes longer. Shipping time is individual to the item and is stated on the purchase page.
            It usually takes up to 3 weeks.
         </p>

         <br />
         <br />

         <h2>Refund policy</h2>
         <p>
            Due to the nature of our business we only accept DOMESTIC returns (no exchanges) at this moment.
            <br />
            <br />
            Our head office is located in Poland.
            <br />
            <br />
            Domestic returns are only being accepted for 14 days – since the day of delivery.
            <br />
            <br />
            We only accept returns of items that still have all labels and no signs of wearing!
            <br />
            <br />
            Before returning the goods, make sure to fill in the slip enclosed in the paper envelope from your order.
            <br />
            <br />
            For instructions regarding returns please contact us by e-mail: info@falkoproject.com
         </p>
      </article>
   )
}

export default function Policies() {
   const router = useRouter();
   return (
      <>
         <Head>
            <title>{router.locale == "pl" ? "Regulamin" : "Terms and Conditions"}</title>
         </Head>
         <main className={"policiesPage"}>
            <section>
               <Image
                  src={PoliciesDesktop}
                  alt={""}
                  fill
                  draggable={false}
                  className='policies-desktop'
               />

               <Image
                  src={PoliciesMobile}
                  alt={""}
                  fill
                  draggable={false}
                  className='policies-mobile'
               />

               {router.locale === "pl" ? <Polish /> : <English />}
            </section>
         </main>
      </>
   )
}