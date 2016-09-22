import { reducer, objectByNumber, removeFromObjectByNumber } from "immuto";
import { Shelf } from "./shelf";

export type Shelves = { [id: number]: Shelf };

export namespace Shelves {
    
    export const empty: Shelves = {};

    export const at = objectByNumber(Shelf);
    export const remove = removeFromObjectByNumber<Shelf>();
    
    export const reduce = reducer(empty)
        .action(at)
        .action(remove);
}
