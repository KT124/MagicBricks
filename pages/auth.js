import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { chains, providers } from "@web3modal/ethereum";
import { useProvider, useSigner, useWaitForTransaction, useContractRead, useContractWrite, useEnsResolver, useContract } from "@web3modal/react";
import MagicBrics from "./MagicBrics.json";


import GrantAccessRealtor from "./authRealtor";






const GrantAccessOwner = function () {


    const [userAddress, setUserAddrss] = useState(0);
    // const { data, refetch } = useEnsResolver({ userAddress })


    // const defaultAdmintRole = "0x0000000000000000000000000000000000000000000000000000000000000000";
    // const realtor = "0x71648b0947589fb8B5b5D53dA1Aca38d53BceA81";
    // const seller = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    // owner access = 0x43f25613eb2f15fb17222a5d424ca2655743e71265d98e4b93c05e5fb589ecde

    const config = {
        address: '0xd857aF6b2B019A3faC1D21D9391026148af34740',
        abi: MagicBrics.abi,
        functionName: 'grantRole',
        chainId: chains.polygonMumbai.id,
        args: ["0x43f25613eb2f15fb17222a5d424ca2655743e71265d98e4b93c05e5fb589ecde", userAddress]
    };
    const { data, error, isLoading, write } = useContractWrite(config);
    const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });



    const setHandler = async (event) => {
        event.preventDefault();
        await write();
    };




    return (
        <div >
            <Head> <title>Grant Access</title></Head>


            <Link className={styles.card} href="/">
                Home

            </Link>

            <div className={styles.code}>
                <p2 >This is authorization page</p2>
                <p>Write Data: <span>{isLoading ? 'Loading...' : JSON.stringify(data)}</span></p>
                <p>Receipt Data: <span>{isWaiting ? 'Waiting...' : JSON.stringify(receipt)}</span></p>
                <p>Error: <span>{error ? error.message : 'No Error'}</span></p>
                {/* <button className={styles.button}  onClick={setHandler}>Grant Seller Access</button> */}

                <form onSubmit={setHandler}>
                    <label>Wallet:</label>

                    <input id="setAddress" placeholder="enter wallet address" type="text" value={userAddress} onChange={e => setUserAddrss(e.target.value)} />
                    <button color="purple" type={"submit"}>Grant Seller access</button>
                </form>

            </div>

            <GrantAccessRealtor />
        </div>

    );




};





export default GrantAccessOwner;