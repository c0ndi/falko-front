import PoliciesBg from '@/public/images/policies-bg.webp';
import Image from "next/image";
import Head from "next/head";

export default function Policies() {
   return (
      <>
         <Head>
            <title>Terms and Conditions</title>
         </Head>
         <main className={"policiesPage"}>
            <section>
               <Image
                  src={PoliciesBg}
                  alt={""}
                  fill
                  draggable={false}
               />

               <article>
                  <h2>Shipping policy</h2>
                  <p>
                     Shipping for items in stock takes 1 to 2 business days
                     Pre-order items take longer to ship. The shipping time is individual for a given item and is provided on the purchase page.
                  </p>

                  <br/>
                  <br/>

                  <h2>Refund policy</h2>
                  <p>
                     Due to the nature of our business we only accept DOMESTIC returns (no exchanges) at this moment.
                     <br/>
                     <br/>
                     We are located in Poland.
                     <br/>
                     Domestic returns are only being accepted for 14 days – since the day of delivery.
                     <br/>
                     <br/>
                     We only accept returns of items that still have all the labels and have no marks of rocking !
                     <br/>
                     <br/>
                     For instructions regarding returns please contact us by e-mail: info@falkoproject.com
                  </p>
               </article>
            </section>
         </main>
      </>
   )
}