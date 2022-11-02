import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useContractRead } from "@web3modal/react";
import MagicBrics from "../../blockchain/artifacts/contracts/MagicBricsV3.sol/MagicBrics.json";


export default function TotalPlotsListed() {
    const config = {
        address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
        abi: MagicBrics.abi,
        functionName: 'totalPlotsSold',
        chainId: chains.polygonMumbai.id,
    };
    const { data, error, isLoading, refetch } = useContractRead(config);

    return (
        <section>

            <Head> <title>Total Sold Number</title></Head>


            <Link className={styles.card} href="/">
                Home

            </Link>
            <h1>Get Total Sold</h1>

            <ul>

                <li>
                    Returned data: <span>{isLoading ? 'Loading...' : JSON.stringify(data.toString())}</span>
                </li>
                <li>
                    Error: <span>{error ? error.message : 'No Error'}</span>
                </li>
            </ul>
            <button onClick={async () => refetch()}>Refetch data</button>
        </section>
    );
}