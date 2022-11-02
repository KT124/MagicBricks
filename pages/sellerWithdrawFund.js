import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useWaitForTransaction, useContractRead, useContractWrite, useAccount, useContract } from "@web3modal/react";
import MagicBrics from "./MagicBrics.json";








const SellerWithdraw = function () {
    const [plot, setPlot] = useState(0);



    const options = {
        address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
        abi: MagicBrics.abi,
        functionName: 'sellerWithdraw',
        chainId: chains.polygonMumbai.id,
        args: [plot]
    };
    const { data, error, isLoading, write } = useContractWrite(options);
    const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });

    const setHandler = async (event) => {
        event.preventDefault();
        await write();
    };


    return (


        <div>

            <Head> <title>Seller Fund Withdrawal Page</title></Head>


            <Link className={styles.card} href="/">
                Home

            </Link>

            <div className={styles.code}>
                <p>Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
                <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
                <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
                {/* <button onClick={async () => write()}>Withdraw Funds</button> */}


                <form onSubmit={setHandler}>
                    <input id="plotNumber" placeholder="enter plot number" type="number" value={plot} onChange={e => setPlot(e.target.value)} />

                    <button className={styles.button} type={"submit"}>Withdraw Funds</button>
                </form>

            </div>


        </div>
    );


};


export default SellerWithdraw;