import * as React from "react";
import { Shop } from "../models/shop";
import { ShelfEditor } from "./ShelfEditor";
import { TextInput } from "./TextInput";
import { getIds, getNextId } from "../util";

export function ShopEditor(
    {shop}: {shop: Shop.Cursor}
) {
    const {name, shelves, selectedShelf} = shop.state;

    const addShelf = () => shop(Shop.shelves.add(getNextId(shelves)));
    const removeShelf = (id: number) => shop(Shop.shelves.remove(id));

    return (
        <div className="shop">
            <div className="shop-header">
                <TextInput property={Shop.name(shop)} placeholder="Shop name"/>
                <button onClick={addShelf}>Add a shelf</button>
            </div>
            <div className="shop-shelves>">
                {
                    getIds(shelves).map(shelf =>
                        <div className="shop-shelf>"
                            key={shelf}
                            onClick={() => shop(Shop.selectShelf(shelf))}>
                            <ShelfEditor
                                shelf={Shop.shelves(shop, shelf)}
                                enableEditing={shelf === selectedShelf}
                                remove={() => removeShelf(shelf)}
                                />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

