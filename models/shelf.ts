import * as I from "immuto";
import { action, reducer, property, collection, amend, numberMapOperations } from "immuto";

import { Book } from "./book";

export interface Shelf {
    readonly description: string;
    readonly books: { [id: number]: Book };
    readonly selectedBook?: number;
}

export namespace Shelf {

    export const description = property("SET_DESCRIPTION",
        (shelf: Shelf) => shelf.description,
        (shelf: Shelf, description: string) => amend(shelf, { description }));

    export const selectBook = action("SELECT_BOOK",
        (shelf: Shelf, selectedBook: number) => amend(shelf, { selectedBook }));

    export const books = collection({
        type: "BOOKS",
        reducer: Book.reduce,
        operations: numberMapOperations<Book>(),
        get: (shelf: Shelf) => shelf.books,
        set: (shelf, books) => amend(shelf, { books })
    });

    export const empty: Shelf = { description: "", books: {} };

    export const reduce = reducer<Shelf>(empty)
        .action(description)
        .action(selectBook)
        .action(books);

    export type Cursor = typeof reduce.cursorType;
}
