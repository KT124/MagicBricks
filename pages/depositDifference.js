import { useState } from "react";
import { BigNumber, ethers } from "ethers";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useWaitForTransaction, useContractWrite } from "@web3modal/react";
import MagicBrics from "./MagicBrics.json";





const DepositRemainingAmountAndConcludeSale = function () {
  const [plot, setPlot] = useState(0);
  const [etherValue, setEtherValue] = useState(0);



  const config = {
    address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
    abi: MagicBrics.abi,
    functionName: 'depositRemainingAmountAndConcludeSale',
    chainId: chains.polygonMumbai.id,
    args: [plot, { value: BigNumber.from(etherValue) }]
  };


  const { data, error, isLoading, write } = useContractWrite(config);
  const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });


  const setHandler = async (event) => {
    event.preventDefault();
    await write();
  };




  return (
    <div>
      <Head> <title>Deposit Difference</title></Head>


      <Link className={styles.card} href="/">
        Home

      </Link>

      <p2 className={styles.code}>This page is for depositing remaining amount</p2>
      <p>Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
      <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
      <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
      {/* <button onClick={async () => write()}>Deposit Remaining Amount</button> */}

      <form onSubmit={setHandler}>
        <input id="plotNumber" placeholder="enter plot number" type="number" value={plot} onChange={e => setPlot(e.target.value)} />
        <input id="value" placeholder="enter ether value" type="number" value={etherValue} onChange={e => setEtherValue(e.target.value)} />

        <button className={styles.button} type={"submit"}>Deposit Remaining Amount</button>
      </form>


    </div>);

};


export default DepositRemainingAmountAndConcludeSale;