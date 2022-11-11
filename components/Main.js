import { contractAddresses, abi } from "../constants";
// dont export from moralis when using react
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "@web3uikit/core";
import { ethers } from "ethers";

export default function Main() {
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
    // These get re-rendered every time due to our connect button!
    const chainId = parseInt(chainIdHex);
    console.log(`ChainId is ${chainId}`);
    const mainAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;

    // State hooks
    // https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
    const [entranceFee, setEntranceFee] = useState("0");
    const [numberOfPlayers, setNumberOfPlayers] = useState("0");

    const dispatch = useNotification();

    const {
        runContractFunction: enterLobby,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: mainAddress,
        functionName: "enterLobby",
        params: {},
        msgValue: entranceFee,
        onError: (error) => console.log(error),
    });

    /* View Functions */

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: mainAddress, // specify the networkId
        functionName: "getEntranceFee",
        params: {},
        onError: (error) => console.log(error),
    });

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: mainAddress,
        functionName: "getNumberOfPlayers",
        params: {},
        onError: (error) => console.log(error),
    });

    async function updateUIValues() {
        // Another way we could make a contract call:
        // const options = { abi, contractAddress: contractAddress }
        // const fee = await Moralis.executeFunction({
        //     functionName: "getEntranceFee",
        //     ...options,
        // })
        const entranceFeeFromCall = (await getEntranceFee()).toString();

        const numPlayersFromCall = (await getNumberOfPlayers()).toString();

        setEntranceFee(entranceFeeFromCall);
        setNumberOfPlayers(numPlayersFromCall);
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues();
        }
    }, [isWeb3Enabled]);
    // no list means it'll update everytime anything changes or happens
    // empty list means it'll run once after the initial rendering
    // and dependencies mean it'll run whenever those things in the list change

    // An example filter for listening for events, we will learn more on this next Front end lesson
    // const filter = {
    //     address: contractAddress,
    //     topics: [
    //         // the name of the event, parnetheses containing the data type of each event, no spaces
    //         utils.id("RaffleEnter(address)"),
    //     ],
    // }

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
            updateUIValues();
            handleNewNotification(tx);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {mainAddress ? (
                <>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async () =>
                            await enterLobby({
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                        ) : (
                            <div>
                                Join Player Lobby: Entrance Fee: {""}
                                {ethers.utils.formatUnits(entranceFee, "ether")}ETH
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
    );
}
