import { action, reducer, property, reference, amend } from "immuto";
import { Books } from "./books";

export interface Shelf {
    readonly description: string;
    readonly books: Books;
    readonly selectedBook?: number;
}

export namespace Shelf {

    export const description = property("DESCRIPTION",
        (shelf: Shelf) => shelf.description);

    export const selectBook = action("SELECT_BOOK",
        (shelf: Shelf, selectedBook: number) => amend(shelf, { selectedBook }));

    export const books = reference("BOOKS", Books, (shelf: Shelf) => shelf.books);

    export const empty: Shelf = { description: "", books: {} };

    export const reduce = reducer<Shelf>(empty)
        .action(description)
        .action(selectBook)
        .action(books);

    export type Cursor = typeof reduce.cursorType;
}
