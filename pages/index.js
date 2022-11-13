import Head from "next/head";
import Header from "../components/Header";
import PlayerCounter from "../components/PlayerCounter";
import { useMoralis } from "react-moralis";
import MainStart from "../components/MainStart";
import Controller from "../components/Controller";
import Information from "../components/Information";
import Map from "../components/Map.js";
import { useEffect, useState } from "react";

const supportedChains = ["5", "31337"];

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis();
    const [numberOfPlayers, setNumberOfPlayers] = useState("0");

    return (
        <div className="pb-2 pl-2 pr-2 pt-2 align-middle">
            <div className="bg-gray-600 pt-8 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-3xl px-8">
                <Head>
                    <title>CryptoRisk</title>
                    <meta name="Cryptorisk" content="Cryptorisk" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    <Header />
                </div>
            </div>
            <div className="flex place-content-center justify-between">
                <div className="inline-grid sm:rounded-3xl px-8 border-2">
                    <div className="sm:rounded-3xl border-2 pt-10 content-center">
                        <Information />
                    </div>
                    <div className="sm:rounded-3xl border-2 pb-5 content-center">
                        <Controller />
                    </div>
                </div>
                <div className="inline-grid place-content-center py-2 border-2 sm:rounded-3xl">
                    <Map />
                </div>
                <div className="inline-grid sm:rounded-3xl px-8 border-2">
                    <div className="pt-10 sm:rounded-3xl border-2">
                        <PlayerCounter />
                    </div>
                    <div className="pb-10 sm:rounded-3xl border-2">
                        <MainStart />
                    </div>
                </div>
            </div>
        </div>
    );
}
