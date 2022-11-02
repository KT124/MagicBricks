import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <div >
         <Head><title >MagicBrics</title></Head>
         <div><h3 className={styles.description}>MagicBrics</h3>

            <div>

               <Link className={styles.card} href="/registerPlotAsOwner">
                  Register Property

               </Link>


               <Link className={styles.card} href="/auth">
                  Authorize

               </Link>

               <Link className={styles.card} href="/createListing">
                  List Plots

               </Link>
               <Link className={styles.card} href="/makeOffer">
                  Buy Offer

               </Link>
               <Link className={styles.card} href="/acceptOffer">
                  Accept Offer

               </Link>

               <Link className={styles.card} href="/depositDifference">
                  Deposit Difference

               </Link>


               <h>


                  <Link className={styles.card} href="/revokeListing">
                     Cancel Listing

                  </Link>
                  <Link className={styles.card} href="/revokeBuyOffer">
                     Revoke Buy Offer

                  </Link>
                  <Link className={styles.card} href="/sellerWithdrawFund">
                     Sellers Funds

                  </Link>
                  <Link className={styles.card} href="/buyerWithdrawFund">
                     buyers Funds

                  </Link>
                  <Link className={styles.card} href="/getListed">
                     Listed Plot Details

                  </Link>
                  <Link className={styles.card} href="/totalListed">
                     Total Listed Number

                  </Link>
                  <Link className={styles.card} href="/totalSold">
                     Total Sold Number

                  </Link>
               </h>

               <div>
                  <ul>
                     <li>
                        <p> NOTE: Seller can sell only through a authorized realtor on this platform </p>
                        <p> NOTE: Seller pays 1% commission of sale price irrespectie of whether sale is successful or not </p>
                        <p> NOTE: Buyer pays 10% paynalty of sale price if he withdraws later</p>
                        <p> NOTE: Contract owner can withdraw all the  funds anytime if need be</p>
                        <p> NOTE: Cooling period is set to 10 seconds, seller can not withdraw total fund utill 10 seconds has elapsed. During this period buyer has option to withdraw annd ger  refund after  paying penalty. He can not withdraw after seller withdraws funds and concluds the  sale</p>
                        <p> 1: To start with, get seller autorization by visiting Authorize page </p>
                        <p> 2: Register property via plot number  </p>
                        <p> 3: Visit List plots tab and  list property via wallet address authorized as realtor on this  platform. you need to contract deployer of this contract for realtor autorization. Ensure you send 0.002% security of asking price in Eth. This is non-refundable platfor fee. This fee is paied to buyer if  seller withdraws sale  </p>
                        <p> 4: After successful listing, make a buy offer.  Buy offer must be 10% of asking price. Seller can not make buy offer.  </p>
                        <p> 5: Seller accept the offer. Go to Accept offer page to accept offer. </p>
                        <p> 6: Go to  Deposit Difference page and pay remaining amount  </p>
                        <p> 7: To finalize the  sale go to Seller fund page and withdraw. This is  send the fund to your wallet and change the ownership of plot registered in the  contract from seller to buyer.  </p>
                        <p> 8: Now Realtor can withdraw 1% commission</p>



                     </li>
                  </ul>

               </div>

            </div>

         </div>

      </div>

   );
}
