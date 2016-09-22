import * as React from "react";
import { replace } from "immuto";
import { optimize, TextInput } from "immuto-react";
import { Shelf, Books, Book } from "../models/all";
import { BookEditor } from "./BookEditor";
import { getIds, getNextId } from "../util";

export interface ShelfEditorProps {
    shelf: Shelf.Cursor;
    enableEditing: boolean;
    remove(): void;
}

export const ShelfEditor = optimize((
    { shelf, enableEditing, remove }: ShelfEditorProps
) => {
    const { books, selectedBook } = shelf.state;

    const addBook = () => shelf.$(Shelf.books)
                               .$(Books.at(getNextId(books)))
                               .$(Book.title)
                               (replace(""));

    const removeBook = (id: number) => shelf.$(Shelf.books)(Books.remove(id));

    const mainClass = "shelf" + (enableEditing ? " editing" : "");

    return (
        <div className={mainClass}>
            <div className="shelf-header">
                <TextInput binding={Shelf.description(shelf)}
                           placeholder="Shelf description" />
                {
                    enableEditing ?
                        <span>
                            <button onClick={addBook}>Add a book</button>
                            <button onClick={remove}>Remove shelf</button>
                        </span> : null
                }
            </div>
            <div className="shelf-books">
                {
                    getIds(books).map(id =>
                        <div className="shelf-book"
                            key={id}
                            onClick={() => shelf(Shelf.selectBook(id))}>
                            <BookEditor
                                book={shelf.$(Shelf.books).$(Books.at(id))}
                                enableEditing={enableEditing && id === selectedBook}
                                remove={() => removeBook(id)} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}, ["remove"]);



