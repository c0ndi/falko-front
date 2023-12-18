import PoliciesMobile from '@/public/images/policies-mobile.jpg';
import PoliciesDesktop from '@/public/images/policies-desktop.jpg';
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/router';

function Polish() {
   return (
      <article>
         <h2>POLITYKA WYSYŁKI</h2>

         <p>
            Wysyłka produktów dostępnych w magazynie trwa od 1 do 2 dni roboczych. Niestety, ze względu na nasz dwuosobowy zespół, wysyłka może potrwać nieco dłużej, gdy obciążenie pracą jest większe.
            <br />
            <br />
            Wysyłka produktów zamówionych w przedsprzedaży trwa dłużej. Czas wysyłki zależy od produktu i jest podany na stronie zakupu.
            Zwykle zajmuje to do 3 tygodni.
         </p>

         <br />
         <br />

         <h2>POLITYKA ZWROTÓW</h2>
         <p>
            Ze względu na charakter naszej działalności, obecnie akceptujemy tylko zwroty krajowe (bez wymiany).
            <br />
            <br />
            Nasza siedziba znajduje się w Polsce.
            <br />
            Zwroty krajowe są przyjmowane tylko przez 14 dni - od dnia dostawy.
            <br />
            <br />
            Przyjmujemy tylko zwroty przedmiotów, które nadal mają wszystkie metki i nie noszą śladów noszenia!
            <br />
            <br />
            Przed odesłaniem towaru należy wypełnić formularz dołączony do papierowej koperty z zamówienia.
            <br />
            Aby uzyskać instrukcje dotyczące zwrotów, prosimy o kontakt mailowy: info@falkoproject.com
         </p>
      </article>
   )
}

function English() {
   return (
      <article>
         <h2>Shipping policy</h2>
         <p>
            Shipping of in-stock products takes between 1 and 2 working days. Unfortunately, due to our two-person team, shipping may take a little longer when the workload is heavier.

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