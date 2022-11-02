import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useWaitForTransaction, useContractRead, useContractWrite, useAccount, useContract } from "@web3modal/react";
import MagicBrics from "./MagicBrics.json";









const GrantAccessRealtor = function () {

    const [userAddress, setUserAddrss] = useState(0);



    const options = {
        address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
        abi: MagicBrics.abi,
        functionName: 'grantRole',
        chainId: chains.polygonMumbai.id,
        args: ["0xf962acfbab8ce8b5063e7eb2e741d447f857c50333efedc97d59cbe8bac576e1", "0x71648b0947589fb8B5b5D53dA1Aca38d53BceA81"]
    };
    const { data, error, isLoading, write } = useContractWrite(options);
    const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });


    const setHandler = async (event) => {
        event.preventDefault();
        await write();
    };


    return (


        <div>

            <Head> <title>Grant Realtor Access</title></Head>


            <div className={styles.code}>
                <p>Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
                <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
                <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
                {/* <button onClick={async () => write()}>Grant Reatlor Access</button> */}

                <form onSubmit={setHandler}>
                    <label>Wallet:</label>

                    <input id="setAddress" placeholder="enter wallet address" type="text" value={userAddress} onChange={e => setUserAddrss(e.target.value)} />
                    <button color="purple" type={"submit"}>Grant Seller access</button>
                </form>

            </div>


        </div>
    );


};




export default GrantAccessRealtor;