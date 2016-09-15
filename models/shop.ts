import * as I from "immuto";
import { action, property, reducer, collection, amend, numberMapOperations } from "immuto";

import { Shelf } from "./shelf";

export interface Shop {
    readonly name: string;
    readonly shelves: { [name: number]: Shelf };
    readonly selectedShelf?: number;
}

export namespace Shop {

    export const name = property("NAME", (shop: Shop) => shop.name);

    export const selectShelf = action("SELECT_SHELF",
        (shop: Shop, selectedShelf: number) => amend(shop, { selectedShelf }));

    export const shelves = collection({
        type: "SHELVES",
        reducer: Shelf.reduce,
        operations: numberMapOperations<Shelf>(),
        get: (shop: Shop) => shop.shelves,
        set: (shop, shelves) => amend(shop, { shelves })
    });

    export const empty: Shop = { name: "", shelves: {} };

    export const reduce = reducer(empty)
        .action(name)
        .action(selectShelf)
        .action(shelves);

    export type Cursor = typeof reduce.cursorType;
}
