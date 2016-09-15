import * as I from "immuto";
import { action, reducer, property, collection, amend, numberMapOperations } from "immuto";

import { Book } from "./book";

export interface Shelf {
    readonly description: string;
    readonly books: { [id: number]: Book };
    readonly selectedBook?: number;
}

export namespace Shelf {

    export const description = property("DESCRIPTION",
        (shelf: Shelf) => shelf.description);

    export const selectBook = action("SELECT_BOOK",
        (shelf: Shelf, selectedBook: number) => amend(shelf, { selectedBook }));

    export const books = collection("BOOKS", Book.reduce, numberMapOperations<Book>(),
        (shelf: Shelf) => shelf.books);

    export const empty: Shelf = { description: "", books: {} };

    export const reduce = reducer<Shelf>(empty)
        .action(description)
        .action(selectBook)
        .action(books);

    export type Cursor = typeof reduce.cursorType;
}
