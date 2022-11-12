import Head from "next/head";
import Header from "../components/Header";
import PlayerCounter from "../components/PlayerCounter";
import Main from "../components/Main";
import { useMoralis } from "react-moralis";

const supportedChains = ["5", "31337"];

export default function MainStart() {
  const { isWeb3Enabled, chainId } = useMoralis();
  return (
    <div>
      {isWeb3Enabled ? (
        <div className="py-2">
          {}
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <Main />
          ) : (
            <div className="text-white">{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div className="text-white">Please Connect Your Wallet To Continue</div>
      )}
    </div>
  );
}
