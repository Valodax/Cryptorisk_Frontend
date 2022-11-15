import Head from "next/head";
import Header from "../components/Header";
import PlayerCounter from "../components/PlayerCounter";
import {
    mainAddresses,
    controlsAddresses,
    dataAddresses,
    mainABI,
    controlsABI,
    dataABI,
} from "../constants";
// dont export from moralis when using react
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "@web3uikit/core";
import { ethers } from "ethers";
const supportedChains = ["5", "31337", "43113"];

export default function MainStart() {
    const { Moralis, isWeb3Enabled, account, chainId: chainIdHex } = useMoralis();
    // These get re-rendered every time due to our connect button!
    const chainId = parseInt(chainIdHex);
    const mainAddress = chainId in mainAddresses ? mainAddresses[chainId][0] : null;
    console.log(`ChainId is ${chainId}`);
    console.log(`mainAddress is ${mainAddress}`);
    // State hooks
    // https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
    const [entranceFee, setEntranceFee] = useState("0");
    const [numberOfPlayers, setNumberOfPlayers] = useState("0");
    const [lobbyFull, setLobbyFull] = useState(false);

    const dispatch = useNotification();
    const {
        runContractFunction: enterLobby,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "enterLobby",
        params: {},
        msgValue: entranceFee,
        onError: (error) => console.log("an error occurred", error),
    });

    /* View Functions */

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress, // specify the networkId
        functionName: "getEntranceFee",
        params: {},
        onError: (error) => console.log(error),
    });

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "getNumberOfPlayers",
        params: {},
        onError: (error) => console.log(error),
    });

    async function updateUIValues() {
        const entranceFeeFromCall = (await getEntranceFee()).toString();
        setEntranceFee(entranceFeeFromCall);
    }

    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",
            position: "topR",
            icon: "bell",
        });
    };

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1);
            handleNewNotification(tx);
            const numberOfPlayers = (await getNumberOfPlayers()).toString();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues();
        }
    }, [isWeb3Enabled]);

    return (
        <div>
            {isWeb3Enabled ? (
                <div className="flex place-content-center">
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div>
                            {mainAddress ? (
                                <>
                                    <button
                                        className="bg-blue-500 hover:bg-green-700 text-white font-bold px-4 py-2 align-middle rounded ml-auto"
                                        onClick={async () =>
                                            await enterLobby({
                                                onSuccess: handleSuccess,
                                                onError: (error) => console.log(error),
                                            })
                                        }
                                        disabled={isLoading || isFetching}
                                    >
                                        {isLoading || isFetching ? (
                                            <div className="animate-spin spinner-border h-6 w-6 hover:bg-green-700 border-b-2 rounded-full"></div>
                                        ) : (
                                            <div>
                                                Join Player Lobby{" "}
                                                <div>
                                                    (Fee: {""}
                                                    {ethers.utils.formatUnits(entranceFee, "ether")}
                                                    ETH)
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                    <br />
                                    <br />
                                </>
                            ) : (
                                <div>Please connect to a supported chain </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-white text-center">{`Please switch to a supported chainId. \n The supported Chain Ids are: ${supportedChains}`}</div>
                    )}
                </div>
            ) : (
                <div className="text-white text-center">Please Connect Your Wallet To Continue</div>
            )}
        </div>
    );
}
