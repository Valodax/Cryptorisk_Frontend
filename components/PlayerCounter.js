import { Table, Tag } from "@web3uikit/core";

export default function PlayerCounter() {
    return (
        <Table
            alignCellItems="right"
            columnsConfig="130px 1fr"
            data={[
                [<Tag color="red" text="Player 1" />, "0x18...130e"],
                [<Tag color="green" text="Player 2" />, "0x18...130e"],
                [<Tag color="yellow" text="Player 3" />, "0x18...130e"],
                [<Tag color="blue" text="Player 4" />, "0x18...130e"],
            ]}
            header={["Player", "Address"]}
            noPagination
            onRowClick={function noRefCheck() {}}
            tableBackgroundColor="darkgrey"
        />
    );
}
