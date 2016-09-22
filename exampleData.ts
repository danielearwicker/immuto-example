import { Shop, Shelves, Shelf, Books, Book } from "./models/all";
import { getIds } from "./util";
import { replace } from "immuto";

const shopData: Shop = {
    name: "Crazy Joe's Bookarama",
    shelves: {
        1: {
            description: "Romance",
            books: {
                1: {
                    title: "1984",
                    price: 8.99,
                    authors: []
                },
                2: {
                    title: "Gone with the Wind",
                    price: 3.99,
                    authors: []
                },
                3: {
                    title: "Fifty Shades of Filth",
                    price: 1.99,
                    authors: []
                }
            }
        },
        2: {
            description: "History",
            books: {
                1: {
                    title: "Henry VII for Dummies",
                    price: 12.99,
                    authors: []
                },
                2: {
                    title: "Rome: Day 1",
                    price: 16.99,
                    authors: []
                },
                3: {
                    title: "Trump: Seriously?",
                    price: 12.99,
                    authors: []
                }
            }
        }
    }
}

export function loadExample(shop: Shop.Cursor) {

    shop.$(Shop.name)(replace(shopData.name));
    
    for (const shelfId of getIds(shopData.shelves)) {
        const shelfData = shopData.shelves[shelfId];

        const shelf = shop.$(Shop.shelves).$(Shelves.at(shelfId));
        shelf.$(Shelf.description)(replace(shelfData.description));

        for (const bookId of getIds(shelfData.books)) {
            const bookData = shelfData.books[bookId];

            const book = shelf.$(Shelf.books).$(Books.at(bookId));

            book.$(Book.title)(replace(bookData.title));
            book.$(Book.price)(replace(bookData.price));
        }
    }
}
