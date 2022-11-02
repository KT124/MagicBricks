import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useWaitForTransaction, useContractRead, useContractWrite, useAccount, useContract } from "@web3modal/react";
// import MagicBrics from "../../blockchain/artifacts/contracts/MagicBrics.sol/MagicBrics.json"
import MagicBrics from "../../blockchain/artifacts/contracts/MagicBricsV3.sol/MagicBrics.json";








const RevokeBuyOffer = function () {
    const [plot, setPlot] = useState(null);



    const options = {
        address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
        abi: MagicBrics.abi,
        functionName: 'revokeBuyOffer',
        chainId: chains.polygonMumbai.id,
        args: [plot]
    };
    const { data, error, isLoading, write } = useContractWrite(options);
    const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });

    const setHandler = async (event) => {
        event.preventDefault();
        setPlot(event.target.value);
        await write();
    };


    return (


        <div>

            <Head> <title>Revoke Offer Page</title></Head>


            <Link className={styles.card} href="/">
                Home

            </Link>

            <div className={styles.code}>
                <p>Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
                <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
                <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
                {/* <button onClick={async () => write()}>Revoke Buy Offer</button> */}

                <form onSubmit={setHandler}>
                    <input id="plotNumber" placeholder="enter plot number" type="number" value={plot} onChange={e => setPlot(e.target.value)} />

                    <button className={styles.button} type={"submit"}>Revoke buy offer</button>
                </form>


            </div>


        </div>
    );


};


export default RevokeBuyOffer;