import { reducer, objectByNumber, removeFromObjectByNumber } from "immuto";
import { Book } from "./book";

export type Books = { [id: number]: Book };

export namespace Books {
    
    export const empty: Books = {};
    
    export const at = objectByNumber(Book);
    export const remove = removeFromObjectByNumber<Book>();
    
    export const reduce = reducer(empty)
        .action(at)
        .action(remove);
}
