import * as React from "react";
import { optimize } from "immuto-react";
import { Shelf } from "../models/shelf";
import { BookEditor } from "./BookEditor";
import { TextInput } from "./TextInput";
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

    const addBook = () => shelf(Shelf.books.add(getNextId(books)));
    const removeBook = (id: number) => shelf(Shelf.books.remove(id));

    const mainClass = "shelf" + (enableEditing ? " editing" : "");

    return (
        <div className={mainClass}>
            <div className="shelf-header">
                <TextInput property={Shelf.description(shelf)}
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
                    getIds(books).map(book =>
                        <div className="shelf-book"
                            key={book}
                            onClick={() => shelf(Shelf.selectBook(book))}>
                            <BookEditor
                                book={Shelf.books(shelf, book)}
                                enableEditing={enableEditing && book === selectedBook}
                                remove={() => removeBook(book)} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}, ["remove"]);

