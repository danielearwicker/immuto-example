import * as I from "immuto";
import { action, property, reducer, reference, amend, 
    objectByNumber, removeFromObjectByNumber } from "immuto";
import { Shelves } from "./shelves";

export interface Shop {
    readonly name: string;
    readonly shelves: Shelves;
    readonly selectedShelf?: number;
}

export namespace Shop {

    export const name = property("NAME", (shop: Shop) => shop.name);

    export const selectShelf = action("SELECT_SHELF",
        (shop: Shop, selectedShelf: number) => amend(shop, { selectedShelf }));

    export const shelves = reference("SHELVES", Shelves, (shop: Shop) => shop.shelves);

    export const empty: Shop = { name: "", shelves: {} };

    export const reduce = reducer(empty)
        .action(name)
        .action(selectShelf)
        .action(shelves);

    export type Cursor = typeof reduce.cursorType;
}
