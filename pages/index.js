import Head from "next/head";
import Header from "../components/Header";
import PlayerCounter from "../components/PlayerCounter";
import Main from "../components/Main";
import { useMoralis } from "react-moralis";
import MainStart from "../components/MainStart";
import Game from "../components/Game";
import Information from "../components/Information";

const supportedChains = ["5", "31337"];

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis();

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
            <div className="flex flex-row place-content-center justify-between">
                <div className="inline-grid px-8">
                    <div className="sm:rounded-3xl content-center py-2">
                        <MainStart />
                    </div>
                    <div className="py-20 sm:rounded-3xl">
                        <Information />
                    </div>
                </div>
                <div className="inline-grid place-content-center py-2 sm:rounded-3xl">
                    <Game />
                </div>
                <div className="inline-grid sm:rounded-3xl px-8">
                    <div className="py-2 sm:rounded-3xl ">
                        <PlayerCounter />
                    </div>
                    <div className="py-20 sm:rounded-3xl ">
                        <PlayerCounter />
                    </div>
                </div>
            </div>
        </div>
    );
}
