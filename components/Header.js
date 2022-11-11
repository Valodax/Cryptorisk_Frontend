import { ConnectButton } from "@web3uikit/web3";

export default function Header() {
    return (
        <div className="flex">
            <div className="font-semibold text-3xl mr-auto pl-3 pb-1 text-white hover:text-red-500">
                <h1 role="button" onClick={() => (window.location = "http://coingecko.com")}>
                    CRYPTORISK
                </h1>
            </div>
            <div className="ml-auto">
                <ConnectButton />
            </div>
        </div>
    );
}
