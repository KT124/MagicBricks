import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useWaitForTransaction, useContractRead, useContractWrite, useAccount, useContract } from "@web3modal/react";
// import MagicBrics from "../../blockchain/artifacts/contracts/MagicBrics.sol/MagicBrics.json"
import MagicBrics from "../../blockchain/artifacts/contracts/MagicBricsV3.sol/MagicBrics.json";






const Register = function () {

    const [ plotNumber, setPlotNumber] = useState(0);
    // const signer = data1.signer;

    // const defaultAdmintRole = "0x0000000000000000000000000000000000000000000000000000000000000000";
    // const realtor = "0x71648b0947589fb8B5b5D53dA1Aca38d53BceA81";
    // const seller = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    // const { provider } = useProvider()
    // const { websocketProvider } = useWebsocketProvider()




    // const { data, error, isLoading, refetch  } = useSigner({chainId: 80001})

    const config = {
        address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
        abi: MagicBrics.abi,
        functionName: 'registerPropertyOnPlatformAsOwner',
        chainId: chains.polygonMumbai.id,
        args: [plotNumber]
    };


    const { data, error, isLoading, write } = useContractWrite(config);
    const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });


    const setHandler = async (event) => {
        event.preventDefault();
        await write();
    };


    return (
        <div>
            <Head> <title>Register</title></Head>


            <Link className={styles.card} href="/">
                Home

            </Link>

            <p2 className={styles.code}>This is register page for plot owners</p2>
            <p> Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
            <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
            <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
            {/* <button onClick={async () => write()}>Click here to regsiter</button> */}

            <form onSubmit={setHandler}>
                <label>Plot:</label>

                <input id="setNumber" placeholder="enter plot number" type="number" value={plotNumber} onChange={e => setPlotNumber(e.target.value)} />
                <button color="purple" type={"submit"}>Click here to register</button>
            </form>

        </div>

    );



};


export default Register;