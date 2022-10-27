import Head from "next/head";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";

const supportedChains = ["5", "31337"];

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis();

    return (
        <div class="pb-2 pl-2 pr-2 pt-2">
            <div class="bg-gray-600 pt-8 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-3xl px-8">
                <Head>
                    <title>CryptoRisk</title>
                    <meta name="Cryptorisk" content="Cryptorisk" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
            </div>
            <div class="text-center py-10">
                <div>
                    {isWeb3Enabled ? (
                        <div>
                            {supportedChains.includes(parseInt(chainId).toString()) ? (
                                <LotteryEntrance />
                            ) : (
                                <div class="text-white">{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                            )}
                        </div>
                    ) : (
                        <div class="text-white">Please Connect Your Wallet To Continue</div>
                    )}
                </div>
            </div>
        </div>
    );
}
