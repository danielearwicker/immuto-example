import * as React from "react";
import { bindToCursor } from "immuto-react";
import { Shelf } from "../models/shelf";
import { BookEditor } from "./BookEditor";
import { TextInput } from "./TextInput";
import { getIds, getNextId } from "../util";

export interface ShelfEditorProps {
    enableEditing: boolean;
    remove(): void;
}

const ShelfBookEditor = bindToCursor(BookEditor, Shelf.books);

export function ShelfEditor(
    {enableEditing, remove}: ShelfEditorProps,
    shelf: Shelf.Cursor
) {
    const {description, books, selectedBook} = shelf.state;

    const addBook = () => shelf(Shelf.books.add(getNextId(books)));

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
                            onClick={ () => shelf(Shelf.selectBook(book)) }>
                            <ShelfBookEditor
                                cursor={shelf}
                                path={book}
                                enableEditing={enableEditing && book === selectedBook}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

