import { useState } from "react";
import { BigNumber, ethers } from "ethers";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useWaitForTransaction, useContractWrite } from "@web3modal/react";
import MagicBrics from "./MagicBrics.json";





const CreateListing = function () {

  const [plotNumber, setPlotNumber] = useState(0);
  const [plotArea, setPlotArea] = useState(0);
  const [askingPrice, setAskingPrice] = useState(0);
  const [plotLocation, setPlotLocation] = useState("");
  const [address, setAddress] = useState("");
  const [etherValue, setEtherValue] = useState(0);




  // const priceChange = (e) => {
  //   askingPrice = e.target.value;
  //   console.log(askingPrice);
  // };



  const config = {
    address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
    abi: MagicBrics.abi,
    functionName: 'listPlot',
    chainId: chains.polygonMumbai.id,
    args: [plotNumber, plotArea, BigNumber.from(askingPrice), plotLocation, address, { value: BigNumber.from(etherValue) }]
    // args: [2, 1000, BigNumber.from(100), "Britain", "0x928B0bACF6532a552fDcFA32aCA962684755f70c", { value: BigNumber.from(110) }]
  };


  const { data, error, isLoading, write } = useContractWrite(config);
  const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });


  const setHandler = async (event) => {
    event.preventDefault();
    console.log(typeof askingPrice);
    await write();
  };




  return (
    <div>
      <Head> <title>CreateListing</title></Head>


      <Link className={styles.card} href="/">
        Home

      </Link>

      <p className={styles.code}>This is create listing page</p>
      <p>Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
      <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
      <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
      <button onClick={async () => write()}>List Plots</button>


      <form onSubmit={setHandler}>
        <label>Plot:</label>

        <input id="setNumber" placeholder="enter plot number" type="number" value={plotNumber} onChange={e => setPlotNumber(e.target.value)} />

        <input id="setArea" placeholder="enter plot area" type="number" value={plotArea} onChange={e => setPlotArea(e.target.value)} />

        <input id="setPrice" placeholder="enter asking price" type="number" value={askingPrice} onChange={e => setAskingPrice(e.target.value)} />

        <input id="setLocation" placeholder="enter plot location" type="text" value={plotLocation} onChange={e => setPlotLocation(e.target.value)} />

        <input id="address" placeholder="enter wallet address" type="text" value={address} onChange={e => setAddress(e.target.value)} />

        <input id="value" placeholder="enter ether value" type="number" value={etherValue} onChange={e => setEtherValue(e.target.value)} />

        <button className={styles.button} type={"submit"}>Click here to register</button>
      </form>


    </div>);

};


export default CreateListing;