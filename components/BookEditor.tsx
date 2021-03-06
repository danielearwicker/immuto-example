import * as React from "react";
import { optimize, TextInput } from "immuto-react";
import { Book } from "../models/book";
import { DecimalInput } from "./DecimalInput";

export interface BookEditorProps {
    book: Book.Cursor;
    enableEditing: boolean;
    remove(): void;
}

export const BookEditor = optimize((
    { book, enableEditing, remove }: BookEditorProps,
) => {

    const mainClass = "book" + (enableEditing ? " editing" : "");

    const visibleIfEditing = {
        visibility: enableEditing ? "visible" : "hidden"
    };

    return (
        <div className={mainClass}>
            <div className="book-title">
                <TextInput binding={book.$(Book.title)}
                           placeholder="Book title" />
                <button onClick={remove} style={visibleIfEditing}>X</button>
            </div>
            <div className="book-price">
                <DecimalInput binding={book.$(Book.price)}
                              placeholder="Price"
                              decimalPlaces={2} />
            </div>
        </div>
    );
}, ["remove"]);
