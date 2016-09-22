import * as React from "react";
import { replace } from "immuto";
import { optimize, TextInput } from "immuto-react";
import { Shop, Shelves, Shelf } from "../models/all";
import { ShelfEditor } from "./ShelfEditor";
import { getIds, getNextId } from "../util";

export const ShopEditor = optimize((
    { shop }: { shop: Shop.Cursor }
) => {
    const { name, shelves, selectedShelf } = shop.state;

    const addShelf = () => shop.$(Shop.shelves)
                               .$(Shelves.at(getNextId(shelves)))
                               .$(Shelf.description)
                               (replace(""));

    const removeShelf = (id: number) => shop.$(Shop.shelves)(Shelves.remove(id));

    return (
        <div className="shop">
            <div className="shop-header">
                <TextInput binding={Shop.name(shop)} placeholder="Shop name" />
                <button onClick={addShelf}>Add a shelf</button>
            </div>
            <div className="shop-shelves>">
                {
                    getIds(shelves).map(id =>
                        <div className="shop-shelf>"
                            key={id}
                            onClick={() => shop(Shop.selectShelf(id))}>
                            <ShelfEditor
                                shelf={shop.$(Shop.shelves).$(Shelves.at(id))}
                                enableEditing={id === selectedShelf}
                                remove={() => removeShelf(id)}
                                />
                        </div>
                    )
                }
            </div>
        </div>
    );
});

