import { Table, Tag } from "@web3uikit/core";
import { mainAddresses, mainABI } from "../constants";

export default function PlayerCounter() {
    return (
        <Table
            alignCellItems="middle"
            columnsConfig="150px 1fr 1fr"
            data={[
                [<Tag color="red" text="Player 1" />, "0x18...130e"],
                [<Tag color="green" text="Player 2" />, "0x18...130e"],
                [<Tag color="yellow" text="Player 3" />, "0x18...130e"],
                [<Tag color="blue" text="Player 4" />, "0x18...130e"],
            ]}
            header={["Territory", "Number of Troops", "Bordering"]}
            noPagination
            onRowClick={function noRefCheck() {}}
            tableBackgroundColor="darkgrey"
        />
    );
}
