import '../styles/globals.css';

// import ReactDOM from "react-dom/client";
import { chains, providers } from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
// import { AppProps } from "next/app";
import styles from "../styles/Home.module.css";


const modalConfig = {
  projectId: "a92b43857c5230d5e306ea7b8c18d852",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "MagicBrics",
    autoConnect: true,
    chains: [
      // chains.mainnet,
      // chains.avalanche,
      chains.polygonMumbai,
      // chains.binanceSmartChain,
      // chains.fantom,
      // chains.arbitrum,
      // chains.optimism,
      // chains.hardhat,f3699a0b08fd4f56a8dd94ab9d43138b
    ],
    providers: [
      providers.walletConnectProvider({
        projectId: "a92b43857c5230d5e306ea7b8c18d852",
      }),



    ],
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={styles.wallet}><Web3Button /></div>

      <Component {...pageProps} />
      <Web3Modal config={modalConfig} />
    </>
  );
}
