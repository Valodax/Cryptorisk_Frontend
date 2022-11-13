import { Table, Tag } from "@web3uikit/core";
import { mainAddresses, mainABI } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "@web3uikit/core";
import { ethers } from "ethers";

export default function Controller() {
    return (
        <Table
            alignCellItems="center"
            columnsConfig="auto"
            data={[
                [<Tag color="red" text="Deploy" />],
                [<Tag color="green" text="Attack" />],
                [<Tag color="yellow" text="Fortify" />],
            ]}
            header={[]}
            noPagination
            onRowClick={function noRefCheck() {}}
            tableBackgroundColor="darkgrey"
        />
    );
}
