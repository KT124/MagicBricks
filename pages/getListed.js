import { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useContractRead } from "@web3modal/react";
// import MagicBrics from "../../blockchain/artifacts/contracts/MagicBrics.sol/MagicBrics.json"
import MagicBrics from "../../blockchain/artifacts/contracts/MagicBricsV3.sol/MagicBrics.json";


export default function UseContractRead() {

  const [plot, setPlot] = useState(0);

  const config = {
    address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
    abi: MagicBrics.abi,
    functionName: 'indexToPlot',
    chainId: chains.polygonMumbai.id,
    args: [plot]
  };
  const { data, error, isLoading, refetch } = useContractRead(config);

  const setHandler = async (event) => {
    event.preventDefault();
    await refetch();
  };

  return (
    <div>


      <Head> <title>Accept Offer Page</title></Head>


      <Link className={styles.card} href="/">
        Home

      </Link>

      <h1>Get Listed Item Details</h1>
      <p>Returned data: <span>{isLoading ? 'Loading...' : JSON.stringify(data.toString())}</span></p>
      <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
      {/* <button onClick={async () => refetch()}>Refetch data</button> */}


      <form onSubmit={setHandler}>
        <input id="plotNumber" placeholder="enter plot number" type="number" value={plot} onChange={e => setPlot(e.target.value)} />

        <button className={styles.button} type={"submit"}>Refetch data</button>
      </form>

    </div>
  );
}