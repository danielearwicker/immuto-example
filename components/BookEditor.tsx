import * as React from "react";
import { Book } from "../models/book";
import { DecimalInput } from "./DecimalInput";
import { TextInput } from "./TextInput";

export interface BookEditorProps {
    enableEditing: boolean;
}

export function BookEditor(
    {enableEditing}: BookEditorProps,
    book: Book.Cursor
) {
    const {title, price, authors} = book.state;

    const mainClass = "book" + (enableEditing ? " editing" : "");

    return (
        <div className={mainClass}>
            <div className="book-title">
                <TextInput property={Book.title(book)}
                           placeholder="Book title" />
            </div>
            <div className="book-price">
                <DecimalInput property={Book.price(book)}
                              placeholder="Price"
                              decimalPlaces={2} />
            </div>
        </div>
    );
}


