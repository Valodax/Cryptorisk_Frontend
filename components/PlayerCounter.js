import { Table, Tag } from "@web3uikit/core";
import { mainAddresses, mainABI } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "@web3uikit/core";
import { ethers } from "ethers";
import truncateEthAddress from "truncate-eth-address";

export default function PlayerCounter() {
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
    // These get re-rendered every time due to our connect button!
    const chainId = parseInt(chainIdHex);
    const mainAddress = chainId in mainAddresses ? mainAddresses[chainId][0] : null;
    const [player1, setPlayer1] = useState("N/A");
    const [player2, setPlayer2] = useState("N/A");
    const [player3, setPlayer3] = useState("N/A");
    const [player4, setPlayer4] = useState("N/A");
    const [numberOfPlayers, setNumberOfPlayers] = useState("0");
    const dispatch = useNotification();

    /* View Functions */

    const {
        runContractFunction: getNumberOfPlayers,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "getNumberOfPlayers",
        params: {},
        onError: (error) => console.log(error),
    });
    const { runContractFunction: getPlayer1 } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "getPlayer",
        params: { index: 0 },
        onError: (error) => console.log(error),
    });
    const { runContractFunction: getPlayer2 } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "getPlayer",
        params: { index: 1 },
        onError: (error) => console.log(error),
    });
    const { runContractFunction: getPlayer3 } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "getPlayer",
        params: { index: 2 },
        onError: (error) => console.log(error),
    });
    const { runContractFunction: getPlayer4 } = useWeb3Contract({
        abi: mainABI,
        contractAddress: mainAddress,
        functionName: "getPlayer",
        params: { index: 3 },
        onError: (error) => console.log(error),
    });

    async function updatePlayerUI() {
        const numberOfPlayersFromCall = (await getNumberOfPlayers()).toString();
        setNumberOfPlayers(numberOfPlayersFromCall);
        const player1 = await getPlayer1();
        const player2 = await getPlayer2();
        const player3 = await getPlayer3();
        const player4 = await getPlayer4();
        try {
            setPlayer1(player1.slice(0, 6) + "..." + player1.slice(-6, player1.length));
            setPlayer2(player2.slice(0, 6) + "..." + player1.slice(-6, player1.length));
            setPlayer3(player3.slice(0, 6) + "..." + player1.slice(-6, player1.length));
            setPlayer4(player4.slice(0, 6) + "..." + player1.slice(-6, player1.length));
        } catch {
            console.log("Cant slice all yet");
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updatePlayerUI();
        }
    }, [isWeb3Enabled]);

    return (
        <div>
            <div className="pb-2 place-content-center content-center pl-5 pr-3">
                {mainAddress ? (
                    <>
                        <button
                            className="bg-blue-500 hover:bg-green-700 text-white font-bold place-content-center justify-center px-2 rounded ml-auto"
                            onClick={async () =>
                                await getNumberOfPlayers({
                                    onSuccess: updatePlayerUI,
                                    onError: (error) => console.log(error),
                                })
                            }
                        >
                            {isLoading || isFetching ? (
                                <div className="spinner-border"></div>
                            ) : (
                                <div>Refresh Paid Players in Lobby</div>
                            )}
                        </button>
                        ;
                    </>
                ) : (
                    <div className="text-center text-white">Please connect to Web3</div>
                )}
            </div>
            <div className="place-content-center">
                {mainAddress ? (
                    <>
                        <Table
                            alignCellItems="center"
                            columnsConfig="120px 1fr"
                            data={[
                                [<Tag color="red" theme="chips" text="Player 1" />, player1],
                                [<Tag color="green" theme="chips" text="Player 2" />, player2],
                                [<Tag color="yellow" theme="chips" text="Player 3" />, player3],
                                [<Tag color="blue" theme="chips" text="Player 4" />, player4],
                            ]}
                            header={[`PLAYERS: ${numberOfPlayers}`]}
                            noPagination
                            onRowClick={function noRefCheck() {}}
                            tableBackgroundColor="darkgrey"
                        />
                        ;
                    </>
                ) : (
                    <div>
                        <Table
                            alignCellItems="center"
                            columnsConfig="120px 1fr"
                            data={[
                                [<Tag color="red" theme="chips" text="Player 1" />, player1],
                                [<Tag color="green" theme="chips" text="Player 2" />, player2],
                                [<Tag color="yellow" theme="chips" text="Player 3" />, player3],
                                [<Tag color="blue" theme="chips" text="Player 4" />, player4],
                            ]}
                            header={[`PLAYERS: ${numberOfPlayers}`]}
                            noPagination
                            onRowClick={function noRefCheck() {}}
                            tableBackgroundColor="darkgrey"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
