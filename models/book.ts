import * as I from "immuto";
import { action, reducer, amend, property } from "immuto";

export interface Book {
    readonly title: string;
    readonly price: number;
    readonly authors: string[];
}

export namespace Book {

    export const title = property("TITLE", (book: Book) => book.title);

    export const price = property("PRICE", (book: Book) => book.price);

    export const addAuthor = action("ADD_AUTHOR",
        (book: Book, author: string) => amend(book, { authors: book.authors.concat(author) }));

    export const empty: Book = { title: "", price: 0, authors: [] };

    export const reduce = reducer<Book>(empty)
        .action(title)
        .action(price)
        .action(addAuthor);

    export type Cursor = typeof reduce.cursorType;
}
